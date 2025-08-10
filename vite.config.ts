import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration for the personal site.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
});
