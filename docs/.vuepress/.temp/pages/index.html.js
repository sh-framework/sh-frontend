import comp from "/private/var/www/html/framework/sh-frontend/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroText\":\"Sh Frontend Documentation\",\"tagLine\":\"Here we go\",\"actions\":[{\"text\":\"Get Started\",\"link\":\"/guide/introduction\",\"type\":\"primary\"},{\"text\":\"Github\",\"link\":\"https://github.com/sharasolns/sh-frontend\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Simplicity First\",\"details\":\"Minimal setup with all common web page components.\"},{\"title\":\"Vue-Powered\",\"details\":\"Powered by latest versions of vue and vite\"},{\"title\":\"Performant\",\"details\":\"VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.\"}],\"footer\":\"MIT Licensed | Copyright © 2021-Present Ian Kibet | Silah Kosgei\"},\"headers\":[],\"git\":{\"updatedTime\":1716673099000,\"contributors\":[{\"name\":\"kipkosgei\",\"email\":\"silakosy@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")
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
