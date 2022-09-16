import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx({})],
  // css:{
  //   preprocessorOptions:{
  //     sass:{
  //       additionalData:'@import "./test.scss";'
  //     }
  //   }
  // }
  server: {
    port: 7777
  }
})
