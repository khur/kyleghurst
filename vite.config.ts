import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const PORT = 3000;

export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
