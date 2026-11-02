# Android Release Build Report

## Build

- **App name:** Respiratory Therapy Study Program
- **Android package identity:** `com.respiratorytherapy.studycoach`
- **Version name:** `1.0.1`
- **Version code:** `2`
- **Minimum Android SDK:** 24
- **Target/compile Android SDK:** 36
- **Java:** 21
- **AAB:** `respiratory-therapy-study-1.0.1.aab`
- **APK:** `respiratory-therapy-study-1.0.1.apk`
- **Upload keystore:** `respiratory-therapy-study-upload.jks`

## Signing and validation

- Google Bundletool validation: **PASS**
- AAB JAR signature verification: **PASS**
- APK signature verification: **PASS** (APK Signature Scheme v2)
- Signer: one RSA 4096-bit upload key
- Signer certificate SHA-256: `4004787bc83a9746c8d4d8446af171b761ad70411a1e7b5abdbc7ca7a4aa60ed`
- AAB SHA-256: `2163896fa6659de2fdc16103fb5f510bdbaba14f7265a9579977b240f35b38da`
- APK SHA-256: `316cf8132bd03d64a4dfeea63d7d6c4c183a7f24ec87fc56e6b7ae37053f9bca`
- Keystore SHA-256: `db30778e76d7ba17b017b63ef84342f138aa274bb19723c579ebfbcdd23fa505`

The upload certificate is self-signed, as expected for a Google Play upload key. The keystore password, key password, and alias are held in Replit Secrets and are not present in source files or this report.

## Packaged assets and offline status

The APK/AAB contains the compiled HTML, JavaScript, CSS, favicon, Open Graph
image, Capacitor runtime, all 685 questions, complete topic study content, and
local Inter Regular/SemiBold/Bold font files. No Replit API URL or Google Fonts
URL is embedded.

Topics, topic quizzes, full exams, answer scoring, session review, history, and
progress use an IndexedDB-backed local repository and continue working without
internet access. Local storage is mirrored as a compatibility fallback.

There are no required runtime network dependencies. An independently hosted
HTTPS API can optionally receive background mutation synchronization when
`VITE_SYNC_API_BASE_URL` is configured at build time. Sync is disabled by
default and never blocks local use.

## Read-only privacy audit

### Data the app processes

- Study session mode, selected topic, and requested question count.
- Question IDs and selected answer indexes.
- Correct/incorrect results, scores, question totals, session status, and creation/completion timestamps.
- Request metadata used by server logging: request ID, HTTP method/path, response status, and response time.

### Data not collected by application code

- No name, email address, phone number, account, login, or authentication information.
- No advertising identifier or advertising data.
- No precise or approximate location.
- No contacts, camera, microphone, photos, files, or sensor data.
- No personal health records or patient data. The app contains medical education content, but it does not ask for health information.
- No payment data.
- No application analytics, advertising SDK, Firebase SDK, Sentry SDK, or dedicated crash-reporting SDK.

### Storage, transmission, and sharing

- Study activity is stored on the device in IndexedDB with a local-storage fallback.
- No study activity leaves the device in the default release configuration.
- If an operator explicitly configures an optional synchronization API, mutations are sent to that HTTPS service in the background and are subject to that operator's privacy policy.
- No app feature intentionally sells or shares user data with advertisers or data brokers.

## Backup reminder

Back up the `.jks` file and all three signing secret values in a secure, separate location. Losing the upload key or its credentials can prevent straightforward future Google Play updates. Never commit the keystore or credentials to source control.