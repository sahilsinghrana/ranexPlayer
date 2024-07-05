import react from '@vitejs/plugin-react-swc';
import cssnano from 'cssnano';
import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import {defineConfig} from 'vite';
import eslint from 'vite-plugin-eslint';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  mode: isProd ? 'production' : 'development',
  base : "/ranexPlayer/",
  plugins: [
    react(),
    eslint(),
    cssnano({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
    {
      name: 'image-minimizer',
      async transform(_, id) {
        if (!/\.(png|jpe?g|gif|svg)$/i.test(id)) {
          return null;
        }

        const data = await this.load(id);
        const result = await imagemin.buffer(data, {
          plugins: [
            imageminPngquant({
              quality: [0.6, 0.8],
            }),
          ],
        });

        return {
          code: `export default URL.createObjectURL(new Blob([${JSON.stringify(
            result
          )}], { type: 'image/${id.split('.').pop()}' }))`,
        };
      },
    },
  ],
  build: {
    chunkSizeWarningLimit: 2000,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    cssMinify: isProd,
    minify: 'esbuild',
    manifest: true,
  },
});
