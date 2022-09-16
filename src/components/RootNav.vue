
<script setup lang="ts">
const props = defineProps({
    list: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <ul>
        <template v-for="item in list">
            <li>{{  item.name  }}</li>
            <RootNav v-if="'children' in item" :list="item.children" />
        </template>
    </ul>
</template>
  

