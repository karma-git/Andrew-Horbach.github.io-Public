// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Andrew Horbach',
  tagline: 'My personal page',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/Andrew-Horbach.github.io-Public/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'karma-git', // Usually your GitHub org/user name.
  projectName: 'Andrew-Horbach.github.io-Public ', // Usually your repo name.

  // ref: https://docusaurus.io/docs/markdown-features/code-blocks#interactive-code-editor
  themes: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'home 🏠',
        logo: {
          alt: 'My Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'demo',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/karma-git/Andrew-Horbach.github.io-Public',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'DevOps',
                to: '/docs/demo',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/a_horbach',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/a-horbach/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/karma-git/Andrew-Horbach.github.io-Public.git',
              },
              {
                label: 'My Channel',
                href: 'https://t.me/devopsi',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Andrew Horbach. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ruby', 'hcl', 'yaml', 'powershell'],
      },
    }),
};

module.exports = config;
