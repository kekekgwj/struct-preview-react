import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import dts from 'vite-plugin-dts'
import path from 'path';
// https://vitejs.dev/config/

function resolve(str: string) {
  return path.resolve(__dirname, str);
}
export default defineConfig({
  plugins: [react()],
  root: './examples',
  build: {
    outDir: "lib",
    lib: {
      entry: resolve('packages/index.ts'),
      name: 'StructPreview',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    }
  },
})
