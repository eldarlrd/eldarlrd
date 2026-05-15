import { type SidebarsConfig } from '@docusaurus/plugin-content-docs';

export default {
  docs: [
    {
      items: [
        'web-dev/javascript',
        'web-dev/typescript',
        'web-dev/frontend',
        'web-dev/design',
        'web-dev/backend',
        'web-dev/architecture'
      ],
      label: '🕸️ Web Development',
      link: {
        id: 'web-dev/index',
        type: 'doc'
      },
      type: 'category'
    }
  ]
} as SidebarsConfig;
