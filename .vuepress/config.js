module.exports = {
    title : 'M10',
    serviceWorker : {
      updatePopup: true,
    },
    head: [
      ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    description : 'Welcome to runtimrTerror\'s Blog :)',
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