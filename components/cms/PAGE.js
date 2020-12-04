const PAGE = {
  title: 'Example',
  slug: 'example',
  widgets: [
    {
      widgetId: 'zj3nij4',
      component: 'ImageWidget',
      settings: {
        variant: 'col-12',
        image: 'https://picsum.photos/id/237/1920/1080',
        description: '',
        containerSettings: {}
      },
      id: 'zj3nij4',
      chosen: false,
      selected: false
    },
    {
      widgetId: 'xsmkfai',
      component: 'SectionTitleWidget',
      settings: {
        align: 'text-center',
        title: 'Section title',
        containerSettings: {spacing: 'both'}
      },
      id: 'xsmkfai',
      chosen: false,
      selected: false
    },
    
    {
      widgetId: 'hn6x94n',
      component: 'ArticlesWidget',
      settings: {
        variant: 'col-4',
        list: [
          { id: 1, title: 'Title 1', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit', image: 'https://picsum.photos/seed/picsum/400/300' },
          { id: 2, title: 'Title 2', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit', image: 'https://picsum.photos/id/1003/400/300' },
          { id: 3, title: 'Title 3', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit', image: 'https://picsum.photos/id/1012/400/300' }
        ],
        containerSettings: {}
      }
    },
    {
      widgetId: 'xsmdwfai',
      component: 'ButtonsWidget',
      settings: {
        variant: '"3_columns"',
        containerSettings: { spacing: 'both' },
        list: [
          {
            id: 1,
            button: {
              id: '',
              label: 'Button 1',
              link: '#',
              rel: 'follow',
              target: '_self',
              type: 'primary'
            }
          },
          {
            id: 2,
            button: {
              id: '',
              label: 'Button 2',
              link: '#',
              rel: 'follow',
              target: '_self',
              type: 'primary'
            }
          },
          {
            id: 3,
            button: {
              id: '',
              label: 'Button 3',
              link: '#',
              rel: 'follow',
              target: '_self',
              type: 'primary'
            }
          }
        ]
      },
      id: 'xsmdwfai',
      chosen: false,
      selected: false
    },
    {
      widgetId: 'zj3ft24',
      component: 'TextWidget',
      settings: {
        variant: 8,
        text: '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam corrupti sunt inventore at, eligendi quisquam modi ea earum asperiores libero quos reiciendis impedit placeat! Nesciunt sit consectetur vitae dignissimos deserunt.</p>',
        containerSettings: { spacing: 'bottom' }
      },
      id: 'zj3ft24',
      chosen: false,
      selected: false
    },
    // {
    //   widgetId: 'hwvm3ul',
    //   component: 'NavigationWidget',
    //   settings: {
    //     list: [
    //       { id: 1, title: 'All', link: '#' },
    //       { id: 2, title: 'Houses', link: '#' },
    //       { id: 3, title: 'Offices', link: '#' },
    //       { id: 4, title: 'Apartments', link: '#' },
    //       { id: 5, title: 'Infrastructure', link: '#' }
    //     ],
    //     variant: '3_columns',
    //     containerSettings: {}
    //   },
    //   id: 'hwvm3ul',
    //   chosen: false,
    //   selected: false
    // }
  ]
}

export default PAGE
