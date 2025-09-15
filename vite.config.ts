import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// SAFEST for GitHub Pages project sites
// Makes built asset paths relative (./assets/...), which works in subfolders.
const PROD_BASE = "./";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? PROD_BASE : "/",
  server: { host: "::", port: 8080 },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));
