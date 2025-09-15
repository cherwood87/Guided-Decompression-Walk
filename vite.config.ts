import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// IMPORTANT: exact repo name (case-sensitive)
const REPO_BASE = "/Guided-Decompression-Walk/";

export default defineConfig(({ mode }) => ({
  // Two safe options; pick ONE (the first is recommended)
  // 1) RECOMMENDED for GitHub Project Pages:
  base: mode === "production" ? REPO_BASE : "/",

  // If the above still fails for you, try this instead:
  // base: mode === "production" ? "./" : "/",

  server: { host: "::", port: 8080 },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },

  // Build straight into /docs for Pages
  build: { outDir: "docs", emptyOutDir: true },
}));
