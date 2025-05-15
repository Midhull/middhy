import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Allows for external access during development
    port: 8080,
    // Proxy API calls to backend server (ensure the backend is running on this port)
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Update this to your backend server URL
        changeOrigin: true,
        secure: false, // Set to true if the backend uses HTTPS
      }
    }
  },
  plugins: [
    react(),
    // Apply componentTagger plugin only in development mode
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Root folder for `src`
      "@components": path.resolve(__dirname, "./src/components"), // Alias for components folder
      "@pages": path.resolve(__dirname, "./src/pages"), // Alias for pages folder
      "@utils": path.resolve(__dirname, "./src/utils"), // Alias for utils folder
    },
  },
  build: {
    outDir: "dist", // Output directory for production build
    emptyOutDir: true, // Ensure the output directory is cleaned before each build
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'], // Split react-related libraries into separate chunk
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'], // Split UI libraries into separate chunk
        },
      },
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase", // For CSS modules, use camelCase naming convention
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";` // Global SCSS variables
      }
    }
  },
  define: {
    'process.env': process.env // Make environment variables accessible in your app
  }
}));
