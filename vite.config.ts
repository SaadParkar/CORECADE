import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: true,           // 👈 force Nitro ON outside Lovable environment
  tanstackStart: {
    server: { entry: "server" },
  },
});