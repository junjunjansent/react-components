import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// cannot put test: {} yet

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    enviornment: "happy-dom",
  },
});
