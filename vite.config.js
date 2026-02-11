import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Isse Vite aapke local IP par host ho jayega
    port: 5173, // Optional: Aap apna manpasand port bhi set kar sakte hain
  },
});
