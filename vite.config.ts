import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path';
// https://vitejs.dev/config/

function resolve(str: string) {
  return path.resolve(__dirname, str);
}
export default defineConfig({
  plugins: [dts({
    entryRoot: 'packages'
  }), react()],
  // root: './examples',
  build: {
    outDir: "lib",
    lib: {
      entry: resolve('packages/index.ts'),
      name: 'StructPreview',
      fileName: () => 'index.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    }
  },
})
