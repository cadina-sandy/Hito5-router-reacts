import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // En Pages el sitio está dentro de la carpeta del repositorio.
  base: command === "build" ? "/Hito5-router-reacts/" : "/",
}));
