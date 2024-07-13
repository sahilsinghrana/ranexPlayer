import react from "@vitejs/plugin-react-swc";
import cssnano from "cssnano";
import {defineConfig, loadEnv} from "vite";
import viteCompression from "vite-plugin-compression";
import eslint from "vite-plugin-eslint";
// import vsharp from "vite-plugin-vsharp";

export default function ({mode}) {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  const isProd = process.env.NODE_ENV === "production";
  const BaseUrl = process.env.VITE_BASE_URL || "/";

  return defineConfig({
    mode: isProd ? "production" : "development",
    base: BaseUrl ?? "/",
    plugins: [
      react(),
      eslint(),
      // vsharp(),
      cssnano({
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
        plugins: [["autoprefixer", {}]],
      }),
      viteCompression(),
    ],
    build: {
      chunkSizeWarningLimit: 2000,
      cssCodeSplit: true,
      assetsInlineLimit: 4096,
      minify: "esbuild",
      manifest: true,
      cssMinify: isProd,
    },
  });
}
