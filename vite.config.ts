import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// IMPORTANT: exact repo name (case-sensitive)
const REPO_BASE = "/Guided-Decompression-Walk/";

export default defineConfig(({ mode }) => ({
  // Required for GitHub Project Pages via Actions
  base: mode === "production" ? REPO_BASE : "/",

  server: { host: "::", port: 8080 },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },

  // NOTE: do NOT set build.outDir here when using Actions.
  // The workflow builds to /dist and uploads that automatically.
}));
