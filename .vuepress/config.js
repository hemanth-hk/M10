module.exports = {
    title : 'M10',
    serviceWorker : true,
    head: [
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['link', { rel: 'short icon', type: 'image/png', href: 'assets/img/logo.png' }]
    ],
    description : 'Welcome to runtimeTerror\'s Blog :)',
    themeConfig: {
      serviceWorker : {
        updatePopup: { 
              message: "New content is available.", 
              buttonText: "Refresh" 
           }
      },
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Posts', link: '/all-posts' },
        { text: 'Projects', link: '/projects' },
      ],
      sidebar : 'auto',
      lastUpdated: 'Last Updated',
      logo : 'assets/img/logo.png',
    },
  }
  