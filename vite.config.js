import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Las rutas del Hito 5 comienzan desde /.
  base: "/",
});
