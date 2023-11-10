export default {
  title: 'Documentation | eldarlrd',
  tagline: "eldarlrd's intro and tech documentation",
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

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'documentation, intro, tech'
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
        docs: {
          sidebarPath: 'src/sidebars.ts',
          routeBasePath: '/'
        },
        theme: {
          customCss: 'src/theme.css'
        }
      }
    ]
  ],

  themeConfig: {
    image: 'https://avatars.githubusercontent.com/u/95304986',
    colorMode: {
      respectPrefersColorScheme: true
    },
    navbar: {
      title: 'Intro',
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
          to: 'software/web-dev',
          label: '📜 Docs',
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
        alt: 'GitHub avatar',
        style: {
          border: '1px solid #8b5cf6',
          borderRadius: '25%',
          width: '6rem'
        }
      },
      links: [
        {
          title: '📟 Software',
          items: [
            {
              label: '🕸️ Web Development',
              to: 'web-dev'
            },
            {
              label: '🔑 Licenses',
              to: 'licenses'
            }
          ]
        }
      ]
    }
  }
};
