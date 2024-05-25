import comp from "/private/var/www/html/framework/sh-frontend/docs/.vuepress/.temp/pages/guide/installation.html.vue"
const data = JSON.parse("{\"path\":\"/guide/installation.html\",\"title\":\"Installation\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1716657589000,\"contributors\":[{\"name\":\"kipkosgei\",\"email\":\"silakosy@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"guide/installation.md\"}")
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
