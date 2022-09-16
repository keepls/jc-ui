<template>
    <div class="validate-input-container pb-3">
      <input
        type="text"
        v-model="inputRef.val"
        class="form-control"
        @blur="validateInput"
      />
      <div v-if="inputRef.error" class="form-text">
        {{ inputRef.message }}
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType, reactive } from 'vue'
  interface RuleProp {
    type: 'required' | 'email';
    message: string;
  }
  const emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/  // 验证邮箱
  export type RulesProp = RuleProp[]
  
  export default defineComponent({
    props: {
      rules: Array as PropType<RulesProp>,
      modelValue: String
    },
    setup(props, context) {
      const inputRef = reactive({
        val: '',
        error: false,
        message: ''
      })
      const validateInput = () => {
        if (props.rules) {
          const allPassed = props.rules.every((rule) => {
            let passed = true
            inputRef.message = rule.message
            switch (rule.type) {
              case 'required':
                passed = inputRef.val.trim() !== ''
                break
              case 'email':
                passed = emailReg.test(inputRef.val)
                break
              default:
                break
            }
            return passed
          })
          inputRef.error = !allPassed
        }
      }
      return {
        inputRef,
        validateInput
      }
    }
  })
  </script>
  
