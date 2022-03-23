import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: "Miqueas Martinez",
  dest: "www",
  public: "pub",

  themeConfig: {
    navbar: [
      { text: "Docs", link: "/docs" },
      { text: "Blog", link: "/blog" }
    ]
  }
})