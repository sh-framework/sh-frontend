import comp from "/private/var/www/html/framework/sh-frontend/docs/.vuepress/.temp/pages/Reads.html.vue"
const data = JSON.parse("{\"path\":\"/Reads.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Shfrontend: Vue 3 Framework\",\"slug\":\"shfrontend-vue-3-framework\",\"link\":\"#shfrontend-vue-3-framework\",\"children\":[]},{\"level\":2,\"title\":\"Getting Started\",\"slug\":\"getting-started\",\"link\":\"#getting-started\",\"children\":[]},{\"level\":2,\"title\":\"Read more here\",\"slug\":\"read-more-here\",\"link\":\"#read-more-here\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"Reads.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
