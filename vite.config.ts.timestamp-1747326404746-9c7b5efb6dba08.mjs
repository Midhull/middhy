// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///home/project/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    // Allows for external access during development
    port: 8080,
    // Proxy API calls to backend server (ensure the backend is running on this port)
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        // Update this to your backend server URL
        changeOrigin: true,
        secure: false
        // Set to true if the backend uses HTTPS
      }
    }
  },
  plugins: [
    react(),
    // Apply componentTagger plugin only in development mode
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      // Root folder for `src`
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      // Alias for components folder
      "@pages": path.resolve(__vite_injected_original_dirname, "./src/pages"),
      // Alias for pages folder
      "@utils": path.resolve(__vite_injected_original_dirname, "./src/utils")
      // Alias for utils folder
    }
  },
  build: {
    outDir: "dist",
    // Output directory for production build
    emptyOutDir: true,
    // Ensure the output directory is cleaned before each build
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          // Split react-related libraries into separate chunk
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"]
          // Split UI libraries into separate chunk
        }
      }
    }
  },
  css: {
    modules: {
      localsConvention: "camelCase"
      // For CSS modules, use camelCase naming convention
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
        // Global SCSS variables
      }
    }
  },
  define: {
    "process.env": process.env
    // Make environment variables accessible in your app
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6IFwiOjpcIiwgLy8gQWxsb3dzIGZvciBleHRlcm5hbCBhY2Nlc3MgZHVyaW5nIGRldmVsb3BtZW50XG4gICAgcG9ydDogODA4MCxcbiAgICAvLyBQcm94eSBBUEkgY2FsbHMgdG8gYmFja2VuZCBzZXJ2ZXIgKGVuc3VyZSB0aGUgYmFja2VuZCBpcyBydW5uaW5nIG9uIHRoaXMgcG9ydClcbiAgICBwcm94eToge1xuICAgICAgJy9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsIC8vIFVwZGF0ZSB0aGlzIHRvIHlvdXIgYmFja2VuZCBzZXJ2ZXIgVVJMXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgc2VjdXJlOiBmYWxzZSwgLy8gU2V0IHRvIHRydWUgaWYgdGhlIGJhY2tlbmQgdXNlcyBIVFRQU1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgLy8gQXBwbHkgY29tcG9uZW50VGFnZ2VyIHBsdWdpbiBvbmx5IGluIGRldmVsb3BtZW50IG1vZGVcbiAgICBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKCksXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLCAvLyBSb290IGZvbGRlciBmb3IgYHNyY2BcbiAgICAgIFwiQGNvbXBvbmVudHNcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9jb21wb25lbnRzXCIpLCAvLyBBbGlhcyBmb3IgY29tcG9uZW50cyBmb2xkZXJcbiAgICAgIFwiQHBhZ2VzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvcGFnZXNcIiksIC8vIEFsaWFzIGZvciBwYWdlcyBmb2xkZXJcbiAgICAgIFwiQHV0aWxzXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvdXRpbHNcIiksIC8vIEFsaWFzIGZvciB1dGlscyBmb2xkZXJcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIG91dERpcjogXCJkaXN0XCIsIC8vIE91dHB1dCBkaXJlY3RvcnkgZm9yIHByb2R1Y3Rpb24gYnVpbGRcbiAgICBlbXB0eU91dERpcjogdHJ1ZSwgLy8gRW5zdXJlIHRoZSBvdXRwdXQgZGlyZWN0b3J5IGlzIGNsZWFuZWQgYmVmb3JlIGVhY2ggYnVpbGRcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgcmVhY3Q6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sIC8vIFNwbGl0IHJlYWN0LXJlbGF0ZWQgbGlicmFyaWVzIGludG8gc2VwYXJhdGUgY2h1bmtcbiAgICAgICAgICB1aTogWydAcmFkaXgtdWkvcmVhY3QtZGlhbG9nJywgJ0ByYWRpeC11aS9yZWFjdC1kcm9wZG93bi1tZW51J10sIC8vIFNwbGl0IFVJIGxpYnJhcmllcyBpbnRvIHNlcGFyYXRlIGNodW5rXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNzczoge1xuICAgIG1vZHVsZXM6IHtcbiAgICAgIGxvY2Fsc0NvbnZlbnRpb246IFwiY2FtZWxDYXNlXCIsIC8vIEZvciBDU1MgbW9kdWxlcywgdXNlIGNhbWVsQ2FzZSBuYW1pbmcgY29udmVudGlvblxuICAgIH0sXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgc2Nzczoge1xuICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJAL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO2AgLy8gR2xvYmFsIFNDU1MgdmFyaWFibGVzXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkZWZpbmU6IHtcbiAgICAncHJvY2Vzcy5lbnYnOiBwcm9jZXNzLmVudiAvLyBNYWtlIGVudmlyb25tZW50IHZhcmlhYmxlcyBhY2Nlc3NpYmxlIGluIHlvdXIgYXBwXG4gIH1cbn0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUhoQyxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFFTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFFBQVE7QUFBQTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsSUFFTixTQUFTLGlCQUFpQixnQkFBZ0I7QUFBQSxFQUM1QyxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQ2hCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQTtBQUFBLE1BQ3BDLGVBQWUsS0FBSyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBO0FBQUEsTUFDekQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBO0FBQUEsTUFDL0MsVUFBVSxLQUFLLFFBQVEsa0NBQVcsYUFBYTtBQUFBO0FBQUEsSUFDakQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxJQUNSLGFBQWE7QUFBQTtBQUFBLElBQ2IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osT0FBTyxDQUFDLFNBQVMsV0FBVztBQUFBO0FBQUEsVUFDNUIsSUFBSSxDQUFDLDBCQUEwQiwrQkFBK0I7QUFBQTtBQUFBLFFBQ2hFO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxrQkFBa0I7QUFBQTtBQUFBLElBQ3BCO0FBQUEsSUFDQSxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixnQkFBZ0I7QUFBQTtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLGVBQWUsUUFBUTtBQUFBO0FBQUEsRUFDekI7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
