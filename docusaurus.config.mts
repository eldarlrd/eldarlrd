import type * as Preset from '@docusaurus/preset-classic';
import { type Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

export default {
  title: 'eldarlrd',
  tagline: "eldarlrd's docs & blog",
  favicon: 'https://github.com/eldarlrd.png',
  url: 'https://eldarlrd.is-a.dev',
  baseUrl: '/eldarlrd/',
  organizationName: 'eldarlrd',
  projectName: 'eldarlrd',
  titleDelimiter: '•',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',
  deploymentBranch: 'deploy',

  plugins: ['docusaurus-plugin-sass'],
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw'
    }
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'docs, blog, tech'
      }
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Eldar Paşazadə'
      }
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#8b5cf6'
      }
    }
  ],

  presets: [
    [
      'classic',
      {
        pages: {
          path: 'src',
          include: ['**/*.mdx']
        },
        docs: {
          sidebarPath: 'src/sidebar.ts',
          routeBasePath: '/'
        },
        blog: {
          blogTitle: '💭 Blog',
          onInlineAuthors: 'ignore'
        },
        theme: {
          customCss: 'src/theme.sass'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    image:
      'https://repository-images.githubusercontent.com/566728249/0a83f0a6-21f6-47f3-85cd-811bed28b7dc',
    colorMode: {
      respectPrefersColorScheme: true
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true
      }
    },

    navbar: {
      title: 'eldarlrd',
      hideOnScroll: true,
      logo: {
        src: 'https://github.com/eldarlrd.png',
        alt: 'GitHub avatar',
        style: {
          border: '1px solid #8b5cf6',
          borderRadius: '50%'
        }
      },
      items: [
        {
          to: 'web-dev',
          label: '📜 Docs',
          position: 'left'
        },
        {
          to: 'blog',
          label: '💭 Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/eldarlrd/eldarlrd',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          label: 'Source'
        }
      ]
    },

    footer: {
      copyright: '© 2023 - 2026 eldarlrd',
      logo: {
        src: 'https://github.com/eldarlrd.png',
        href: 'https://eldarlrd.is-a.dev',
        target: '_blank',
        alt: 'GitHub avatar',
        style: {
          border: '1px solid #8b5cf6',
          borderRadius: '25%',
          width: '6rem'
        }
      },
      links: [
        {
          title: '🕸️ Web Development',
          items: [
            {
              label: '⚡ JavaScript',
              to: 'web-dev/javascript'
            },
            {
              label: '🧙🏻‍♂️ TypeScript',
              to: 'web-dev/typescript'
            },
            {
              label: '✒️ Frontend',
              to: 'web-dev/frontend'
            },
            {
              label: '💅🏻 Design',
              to: 'web-dev/design'
            },
            {
              label: '🦎 Backend',
              to: 'web-dev/backend'
            },
            {
              label: '🏗️ Architecture',
              to: 'web-dev/architecture'
            }
          ]
        },
        {
          title: '💭 Blog',
          items: [
            {
              label: '🧠 Cognitive Complexity',
              to: 'blog/2025/11/25/cognitive-complexity'
            },
            {
              label: '📈 Big O',
              to: 'blog/2024/07/19/big-o'
            },
            {
              label: '🔑 Licenses',
              to: 'blog/2023/08/23/licenses'
            }
          ]
        }
      ]
    },

    prism: {
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
} as Config;
