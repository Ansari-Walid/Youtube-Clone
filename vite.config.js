import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    build: {
      outDir: "dist",
    },
    base: "/",
    define: {
      "process.env.REACT_APP_YOUTUBE_API_KEY": JSON.stringify(
        env.REACT_APP_YOUTUBE_API_KEY
      ),
    },

    plugins: [react()],
  };
});

