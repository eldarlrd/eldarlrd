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
        'web-dev/front-end',
        'web-dev/design',
        'web-dev/back-end',
        'web-dev/architecture'
      ]
    }
  ]
} as SidebarsConfig;
