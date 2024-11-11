import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-react-deploy/", // я добавляю цей рядок "base" та вказую назву свого репозиторія "vite-react-deploy"
});
