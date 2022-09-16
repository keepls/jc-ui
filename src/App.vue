<script setup lang="ts">

import HelloWorld from "./components/HelloWorld.vue";

import imgUrl1 from "./assets/one.jpg"
import imgUrl2 from "./assets/two.jpg"
import imgUrl3 from "./assets/three.jpg"

import { reactive } from "vue";
import RootNav from "./components/RootNav.vue";
import TsxTest from "./components/TsxTest"
import Modal from "./components/modal.vue"
import Upload from "./components/Upload.vue"
import Notification from "./components/Notification.vue";
import Input from "./components/Input.vue";
import Tab from "./components/Tab.vue";



const sliders = reactive([
  { imgUrl: imgUrl1 },
  { imgUrl: imgUrl2 },
  { imgUrl: imgUrl3 },

]);

const navList = [
  {
    name: '一级导航 1'
  },
  {
    name: '一级导航 2',
    children: [
      { name: '二级导航 2-1' },
      {
        name: '二级导航 2-2',
        children: [
          { name: '三级导航 2-2-1' },
          { name: '三级导航 2-2-2' },
          {
            name: "test",
            children: [
              { name: "test1" },
              { name: "test2" }
            ]
          }

        ]
      },
      { name: '二级导航 2-2' }
    ]
  },
  {
    name: '一级导航 3'
  }
]


const emailRules: RulesProp = [
  { type: 'required', message: '邮箱不能为空' },
  { type: 'email', message: '请输入正确的邮箱格式' }
]
</script>

<template>
  <!-- <div class="home-banner">
  <HelloWorld :sliders="sliders" :duration="2" :autoplay="true" />
</div> -->
  <!-- <RootNav :list="navList"></RootNav> -->
  <!-- <TsxTest></TsxTest> -->
  <!-- 
  <div class="container">
    <Modal />
  </div> -->
  <!-- <Upload></Upload> -->
  <!-- <Notification></Notification> -->
  <!-- <Input :rules="emailRules"></Input> -->
  <Tab>xssax</Tab>


</template>

<style scoped>
.container {
  height: 80vh;
  margin: 50px;
  overflow: hidden;
  transform: translateZ(0);
}

.home-banner {
  width: 750px;
  height: 500px;
}

@media (max-width: 500px) {
  .home-banner {
    width: 100%;
    height: 241px;
  }
}
</style>
