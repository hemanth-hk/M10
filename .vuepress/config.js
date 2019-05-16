module.exports = {
    title : 'M10',
    serviceWorker : true,
    head: [
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['link', { rel: 'short icon', type: 'image/png', href: 'assets/img/logo.png' }]
    ],
    description : 'Welcome to runtimeTerror\'s Blog :)',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'All posts', link: '/all-posts' },
      ],
      sidebar : 'auto',
      lastUpdated: 'Last Updated',
      logo : 'assets/img/logo.png',
    },
  }
  