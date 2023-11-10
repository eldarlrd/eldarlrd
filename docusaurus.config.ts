import { themes as prismThemes } from 'prism-react-renderer';
import type * as Preset from '@docusaurus/preset-classic';
import { type Config } from '@docusaurus/types';

const config: Config = {
  title: 'Documentation | eldarlrd',
  tagline: "eldarlrd's intro and tech documentation",
  favicon: 'https://avatars.githubusercontent.com/u/95304986',
  url: 'https://eldarlrd.github.io',
  baseUrl: '/eldarlrd/',
  organizationName: 'eldarlrd',
  projectName: 'eldarlrd',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: 'src/sidebar.ts'
        },
        theme: {
          customCss: 'src/theme.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'https://avatars.githubusercontent.com/u/95304986',
    navbar: {
      title: 'eldarlrd',
      logo: {
        // Stuff
        src: 'https://avatars.githubusercontent.com/u/95304986',
      },
      items: [
        {to: '/docs/software/web-dev', label: 'Web Dev', position: 'left'},
        {
          href: 'https://github.com/eldarlrd/eldarlrd',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      logo: {
        // Stuff
        src: 'https://avatars.githubusercontent.com/u/95304986'
      },
      style: 'light',
      copyright: '© 2023 eldarlrd',
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
