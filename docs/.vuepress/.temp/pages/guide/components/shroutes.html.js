import comp from "/private/var/www/html/framework/sh-frontend/docs/.vuepress/.temp/pages/guide/components/shroutes.html.vue"
const data = JSON.parse("{\"path\":\"/guide/components/shroutes.html\",\"title\":\"Routes\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Modal or off-canvas\",\"slug\":\"modal-or-off-canvas\",\"link\":\"#modal-or-off-canvas\",\"children\":[]},{\"level\":2,\"title\":\"Example Usage\",\"slug\":\"example-usage\",\"link\":\"#example-usage\",\"children\":[]},{\"level\":2,\"title\":\"Attributes\",\"slug\":\"attributes\",\"link\":\"#attributes\",\"children\":[{\"level\":3,\"title\":\"popup\",\"slug\":\"popup\",\"link\":\"#popup\",\"children\":[]},{\"level\":3,\"title\":\"title\",\"slug\":\"title\",\"link\":\"#title\",\"children\":[]},{\"level\":3,\"title\":\"size\",\"slug\":\"size\",\"link\":\"#size\",\"children\":[]}]}],\"git\":{\"updatedTime\":1716657589000,\"contributors\":[{\"name\":\"kipkosgei\",\"email\":\"silakosy@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"guide/components/shroutes.md\"}")
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
