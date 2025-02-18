import { type SidebarsConfig } from '@docusaurus/plugin-content-docs';

export default {
  docs: [
    {
      type: 'category',
      label: '🕸️ Web Dev',
      link: {
        type: 'doc',
        id: 'web-dev/index'
      },
      items: [
        'web-dev/javascript',
        'web-dev/typescript',
        'web-dev/frontend',
        'web-dev/design',
        'web-dev/backend',
        'web-dev/architecture'
      ]
    }
  ]
} as SidebarsConfig;
