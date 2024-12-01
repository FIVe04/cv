import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
 
export default defineConfig({
  server: {
    host: '0.0.0.0', // Чтобы сервер слушал на всех интерфейсах
    port: 3000, // Убедитесь, что этот порт доступен
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
});