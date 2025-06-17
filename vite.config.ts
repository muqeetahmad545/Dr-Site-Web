// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "localhost",
      // "3715-2400-adc5-1dd-4000-50a2-cc3e-3a79-c037.ngrok-free.app",
      "fbbe-2400-adc5-1dd-4000-1587-8a40-8a79-b22a.ngrok-free.app",
    ],
  },
});
