import { createRoot } from "react-dom/client";
import { setBaseUrl, setFetchAdapter } from "@workspace/api-client-react";
import App from "./App";
import "./index.css";
import { configureOfflineSync, offlineFetch } from "./lib/offline-repository";

// The generated API callers are served by the local repository in every
// bundle. Sync, when configured, is fire-and-forget and never gates a screen.
setBaseUrl(null);
setFetchAdapter(offlineFetch);
configureOfflineSync(import.meta.env.VITE_SYNC_API_BASE_URL);

createRoot(document.getElementById("root")!).render(<App />);
