<template>
    <div class="app-container">
        <!--使用change事件-->
        <input type="file" @change="handleFileChange">
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from 'vue'
  import axios from 'axios'
  export default defineComponent({
    name: 'App',
    setup() {
      const handleFileChange = (e: Event) => {
        // 断言为HTMLInputElement
        const target = e.target as HTMLInputElement
        const files = target.files
        if(files) {
          const uploadedFile = files[0]
          const formData = new FormData()
          formData.append('file', uploadedFile)
          // 使用node模拟上传接口
          axios.post('http://localhost:3001/upload', formData, {
            headers: {
              "Content-Type": 'multipart/form-data'
            }
          }).then(resp=> {
            console.log('resp', resp)
          }).catch(error=> {
  
          })
        }
      }
  
      return {
        handleFileChange  
      }
    }
  })
  </script>
  
  <style>
  .page-title {
    color: #fff;
  }
  </style>
  
  