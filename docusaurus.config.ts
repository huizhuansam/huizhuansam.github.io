import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hui Zhuan\'s Personal Site',
  tagline: '☝️🤓 software engineer | ⛰️🤿 outdoor adventurer | 🥁🎸 music lover',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://huizhuansam.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'huizhuansam', // Usually your GitHub org/user name.
  projectName: 'huizhuansam.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'huizhuansam.github.io',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/about-me',
          label: 'About Me',
          position: 'left',
        },
        {
          to: '/experience',
          label: 'Experience',
          position: 'left',
        },
        {
          to: '/education',
          label: 'Education',
          position: 'left',
        },
        {
          to: '/projects',
          label: 'Projects',
          position: 'left',
        },
        // {
        //   to: '/blog', 
        //   label: 'Blog', 
        //   position: 'left'
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Connect With Me',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/hui-zhuan-siew',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/huizhuansam',
            },
            {
              label: 'NUS TalentConnect',
              href: 'https://nus-csm.symplicity.com/profiles/huizhuan.siew',
            },
          ],
        },
        {
          title: 'Find Me',
          items: [
            {
              label: 'Spotify',
              href: 'https://open.spotify.com/user/1283716500?si=s3MggnmBRo-PnYanme7JDA',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@huizhuansheds',
            },
            {
              label: 'LeetCode',
              href: 'https://leetcode.com/u/huizhuansam/',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Siew Hui Zhuan. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
