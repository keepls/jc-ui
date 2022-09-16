<template>
    <div>
        <button
            v-for="titleInfo in titles"
            :key="titleInfo.key"
            @click="changeActKey(titleInfo.key)"
            :style="{ color: titleInfo.key === actKey ? 'blue' : '#333' }"
        >
            {{titleInfo.title}}
        </button>
    </div>

    <slot></slot>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'Tabs',
    props: ['defaultActiveKey'],
    emits: ['change'],
    setup(props, context) {
        // 获取 slots 里的 key 和 title
        const panels = context.slots.default()
        const titles = panels.map(child => {
            const { props = {} } = child
            const { key, title } = props
            return {
                key,
                title
            }
        })

        // 当前 actKey
        const actKey = ref(props.defaultActiveKey)
        function changeActKey(key) {
            actKey.value = key
            context.emit('change', key) // 触发回调函数
        }

        return {
            titles,
            actKey,
            changeActKey,
        }
    }
}
</script>
