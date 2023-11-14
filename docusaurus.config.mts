import { themes as prismThemes } from 'prism-react-renderer';
import type * as Preset from '@docusaurus/preset-classic';
import { type Config } from '@docusaurus/types';

export default {
  title: 'eldarlrd',
  tagline: "eldarlrd's docs & blog",
  favicon: 'https://avatars.githubusercontent.com/u/95304986',
  url: 'https://eldarlrd.github.io',
  baseUrl: '/eldarlrd/',
  organizationName: 'eldarlrd',
  projectName: 'eldarlrd',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  deploymentBranch: 'deploy',

  plugins: ['docusaurus-plugin-sass'],
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'documentation, blog, tech'
      }
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Eldar Pashazade'
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
          blogTitle: '💭 Blog'
        },
        theme: {
          customCss: 'src/theme.sass'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    image: 'https://avatars.githubusercontent.com/u/95304986',
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
        src: 'https://avatars.githubusercontent.com/u/95304986',
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
      copyright: '© 2023 eldarlrd',
      logo: {
        src: 'https://avatars.githubusercontent.com/u/95304986',
        href: 'https://eldarlrd.github.io',
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
          title: '🕸️ Web Dev',
          items: [
            {
              label: '⚡ JavaScript',
              to: 'web-dev/javascript'
            },
            {
              label: '🧙‍♂️ TypeScript',
              to: 'web-dev/typescript'
            },
            {
              label: '✒️ Front End',
              to: 'web-dev/front-end'
            },
            {
              label: '💅 Design',
              to: 'web-dev/design'
            },
            {
              label: '🦎 Back End',
              to: 'web-dev/back-end'
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
              label: '🔑 Licenses',
              to: 'blog/2023/08/23/licenses'
            }
          ]
        }
      ]
    },

    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
} as Config;
