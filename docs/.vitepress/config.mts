import { defineConfig } from 'vitepress'

const englishSidebar = [
  {
    text: 'Guide',
    items: [
      { text: 'Setup', link: '/guide/setup' },
      { text: 'Skill Catalog', link: '/guide/catalog' },
      { text: 'Maintenance', link: '/guide/maintenance' }
    ]
  }
]

const japaneseSidebar = [
  {
    text: 'ガイド',
    items: [
      { text: 'セットアップ', link: '/ja/guide/setup' },
      { text: 'Skill カタログ', link: '/ja/guide/catalog' },
      { text: '保守', link: '/ja/guide/maintenance' }
    ]
  }
]

export default defineConfig({
  title: 'maki-skills',
  description: 'Public Codex skill submodule registry for Maki.',
  base: '/maki-skills/',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/maki-skills/logo.svg', type: 'image/svg+xml' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Setup', link: '/guide/setup' },
      { text: 'Catalog', link: '/guide/catalog' },
      { text: '日本語', link: '/ja/' }
    ],
    sidebar: englishSidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Sunwood-ai-labs/maki-skills' }
    ],
    footer: {
      message: 'Public Codex skill registry for Maki.',
      copyright: 'Released under the MIT License.'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      title: 'maki-skills',
      description: 'Maki 向けの公開 Codex skill submodule registry。',
      themeConfig: {
        nav: [
          { text: 'セットアップ', link: '/ja/guide/setup' },
          { text: 'カタログ', link: '/ja/guide/catalog' },
          { text: 'English', link: '/' }
        ],
        sidebar: japaneseSidebar,
        footer: {
          message: 'Maki 向けの公開 Codex skill registry。',
          copyright: 'MIT License で公開。'
        }
      }
    }
  }
})
