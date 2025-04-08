import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    base: "/",
    plugins: [vike({}), react({}), tailwindcss(), tsconfigPaths()],
    server: {
        host: "0.0.0.0",
        port: 4000,
    },
    preview: {
        host: "0.0.0.0",
        port: 4001,
    },
});
