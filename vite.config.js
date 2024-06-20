import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: "https://Ansari-Walid.github.io/Youtube-Clone/",
    define: {
      "process.env.REACT_APP_YOUTUBE_API_KEY": JSON.stringify(
        env.REACT_APP_YOUTUBE_API_KEY
      ),
    },

    plugins: [react()],
  };
});

