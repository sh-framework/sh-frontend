<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps(['modelValue','label','min','max'])
const emit = defineEmits(['update:modelValue','clearValidationErrors'])
const inputModel = ref(null)

const modelValueUpdated = (e) => {
  emit('clearValidationErrors')
  emit('update:modelValue',inputModel)
}
onMounted(()=>{
  props.modelValue && (inputModel.value = props.modelValue)
})
watch(()=>props.modelValue, (newValue)=>{
  if(newValue) {
    inputModel.value = newValue
  }
})
</script>

<template>
  <input :min="min" :max="max" type="number" v-model="inputModel" @change="modelValueUpdated" @keydown="modelValueUpdated" @updated="modelValueUpdated">
</template>