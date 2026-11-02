# Offline architecture

The web and Android bundles use the generated API hook contracts unchanged, but
`src/main.tsx` installs `offlineFetch` as their transport. The transport routes
topics, the complete bundled question bank, sessions, answers, history, and
progress to `OfflineRepository`. The repository stores session state in
IndexedDB (`rt-study-offline`, state store `state`) and mirrors it to
`localStorage` for browsers and runtimes without IndexedDB. Reloading the app
therefore preserves in-progress and completed sessions. State schema v2
migrates v1 sessions (without deleting them) and adds stable client session
UUIDs and an ordered outbox.

## Refreshing bundled content

`artifacts/api-server/src/seed.ts` is the source for all 685 questions. After
changing that seed, run:

```sh
pnpm --filter @workspace/rt-study run data:refresh
```

Review the generated `src/lib/offline-data.ts` and
`src/lib/offline-topics.ts`, then commit them with the source change. The
refresh command includes topic metadata and study notes when `DATABASE_URL` is
available; otherwise it safely refreshes the question bank only.

## Optional synchronization

Set `VITE_SYNC_API_BASE_URL` to a non-Replit HTTPS API base URL before a web or
Android build. Local reads and writes always complete first. Mutations are
durably appended to the ordered outbox and sent sequentially at startup and
when the browser's `online` event fires. Failed operations remain persisted
with retry backoff. One managed timer schedules the next drain at the earliest
persisted retry time while connectivity remains available, and is canceled
when sync is disabled or the browser goes offline. A create must receive a remote session ID before any
answer, complete, or delete operation for that session can be sent; local
numeric IDs are never used in remote URLs.

The compatible remote API contract is:

* `POST /api/sessions` accepts `clientSessionId` plus the normal session input
  and returns the canonical remote numeric `id` (repeating the request with
  the same `Idempotency-Key` must return the same session).
* Answer, complete, and delete routes accept `X-Client-Session-Id`,
  `X-Client-Operation-Id`, and `Idempotency-Key`. The answer body includes
  `clientSessionId`; the server must deduplicate an operation key.
* A non-2xx response does not remove the outbox operation. The client only
  uses the mapped ID returned by create.

The current generated API does not yet declare these UUID/idempotency fields;
the adapter sends them only to an explicitly configured compatible sync API.
If the variable is omitted, no network request is made by the study data layer.

## Android release

The Android scripts do not inject an API URL:

```sh
pnpm --filter @workspace/rt-study run android:bundle
pnpm --filter @workspace/rt-study run android:apk
```

The next Android update is version `1.0.1` (version code `2`) and retains
application ID `com.respiratorytherapy.studycoach`. Release artifacts are not
rebuilt by the offline data workflow.

Signing uses the existing `ANDROID_KEYSTORE_PATH`,
`ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, and `ANDROID_KEY_PASSWORD`
environment variables. Keep the upload key and its credentials outside source
control.