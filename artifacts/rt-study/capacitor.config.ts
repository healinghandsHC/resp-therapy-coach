import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.respiratorytherapy.studycoach",
  appName: "Respiratory Therapy Study Program",
  webDir: "dist/public",
  bundledWebRuntime: false,
  android: {
    allowMixedContent: false,
  },
};

export default config;