<script setup>
import {onMounted,ref,shallowRef} from 'vue'
import shRepo from '../repo/helpers/ShRepo.js'
const props = defineProps(['tabs','data','classes','currentTab'])
const tabs = props.tabs
let currentTab = shallowRef(null)
const generatedId = ref(null)
const isResponsive = ref(null)
onMounted(()=>{
  generatedId.value =  'tab' + Math.random().toString(36).slice(2)
  if(tabs.length > 0) {
   if (props.currentTab) {
      currentTab.value = tabs.find(tab=>tab.label === props.currentTab)
   } else {
     currentTab.value = tabs[0]
   }
  }
})

function setTab(tab){
  currentTab.value = tab
}
</script>
<template>
  <ul class="nav nav-tabs" role="tablist" :class="shRepo.getShConfig('tabsClass','sh-tabs nav-tabs-bordered') + classes">
    <li class="nav-item" role="presentation" v-for="tab in tabs">
      <button @click="setTab(tab)" class="nav-link" :class="currentTab === tab ? 'active':''">
        {{ tab.label }}
        <template v-if="tab.count || tab.tabCount">
          <i class="d-none"></i><sup class="sh_tab_count">{{ tab.count ?? tab.tabCount }}</sup>
        </template>
      </button>
    </li>
  </ul>
  <div class="tab-content">
    <template v-if="currentTab">
      <component v-bind="currentTab" :is="currentTab.component" />
    </template>
  </div>
</template>
<style scoped>
</style>

