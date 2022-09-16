<!-- <script setup lang="ts">

</script>

<template>

</template>

<style scoped>

</style> -->
<template>
  <div class="xtx-carousel">
    <ul class="carousel-body">
      <li class="carousel-item" v-for="(item, i) in sliders" :key="item.i" :class="{ fade: index === i }"
        @mouseenter="stop" @mouseleave="start">
        <router-link to="/doc/carousel"><img :src="item.imgUrl" alt="" /></router-link>
        <a href="javascript:;" class="carousel-btn pre" @click="toggle(-1)">
          <svg class="icon" aria-hidden="true" style="width: 50px;height:50px">
            <use xlink:href="#icon-zuojiantou"></use>
          </svg></a>
        <a href="javascript:;" class="carousel-btn next" @click="toggle(1)">
          <svg class="icon" aria-hidden="true" style="width: 50px;height:50px">
            <use xlink:href="#icon-youjiantou"></use>
          </svg></a>
        <div class="carousel-indictor">
          <span v-for="i in sliders.length" :key="i" :class="{ active: index === i - 1 }"></span>
        </div>
      </li>
    </ul>
  </div>
</template>  
<script lang="ts" >
import { onMounted, ref, watch } from "vue";

export default {
  props: {
    sliders: {
      type: Array,
      default: () => [],
    },
    duration: {
      type: Number,
      default: 2,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    // console.log(props.sliders);
    // 自动轮播的效果
    const index = ref(0); //index初始值为0模板可以现实第一张图
    let timer = null;
    const autoplayFn = () => {
      clearInterval(timer);
      //自动轮播
      timer = setInterval(() => {
        index.value++;
        if (index.value >= props.sliders.length) {
          index.value = 0;
        }
      }, props.duration * 1000); //设置为秒
    };
    watch(
      () => props.sliders,
      () => {
        if (props.autoplay && props.sliders.length > 0) {
          autoplayFn();
        }
      },
      {
        immediate: true,
      }
    );
    // 1.左右箭头点击显示上一页或者下一页
    const toggle = (step) => {
      index.value += step;
      // 点击右键
      if (index.value >= props.sliders.length) {
        index.value = 0;
        return;
      }
      // 点击左键
      if (index.value < 0) {
        index.value = props.sliders.length - 1;
      }
    };
    // 2.进入轮播图就停止，离开就继续轮播
    const start = () => {
      if (props.sliders.length > 0 && props.autoplay) {
        autoplayFn();
      }
    };
    const stop = () => {
      clearInterval(timer);
    };
    // 最后销毁定时器，不然已经看不到轮播图了，一致还在浪费资源
    onMounted(() => {
      clearInterval(timer);
    });
    return { index, start, toggle, stop };
  },
};
</script>

<!-- <style lang="sass" scoped>
.xtx-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indictor {
      position: absolute;
      left: 0;
      bottom: 0px;
      z-index: 2;
      @media (max-width: 500px) {
        width: 100%;
      }
      width: 750px;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          // span中的每个span
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      color: #fff;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      @media (max-width: 500px) {
        top: 110px;
      }
      &.pre {
        left: 20px;
        @media (max-width: 500px) {
          left: 10px;
        }
      }
      &.next {
        right: 20px;
        @media (max-width: 500px) {
          right: 10px;
        }
      }
    }
    &:hover {
      .carousel-btn {
        opacity: 1;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style> -->
