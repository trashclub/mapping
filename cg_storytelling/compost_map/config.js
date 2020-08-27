var config = {
  style: 'mapbox://styles/mbm557/ckecxp0mr2j5519phizzqfgu7',
  accessToken: 'pk.eyJ1IjoibWJtNTU3IiwiYSI6ImNrZWJnaDdhdjA4angyeXFqYXprMjlzZmYifQ.Y6tixEqY_tLiOqx1hzB_nQ',
  showMarkers: false,
  theme: 'dark',
  alignment: 'left',
  title: 'Test Map for Common Ground Compost',

  subtitle: 'Community Districts and Pre-covid compost Dropoff locations',
  byline: 'Trash Club',
  footer: 'Date collected through NYC Open Data.',
  chapters: [{
      id: 'start',
      title: 'NYC Community Board Districts',
      description: 'New York City is broken up into 59 Community Board Districts. They advise on land use and zoning, participate in the city budget process, and address service delivery. Community boards assess the needs of their own neighborhoods, meet with city agencies and make recommendations in the city\'s budget process to address them.',

      location: {
        center: [-73.99258, 40.70341],
        zoom: 9.82,
        pitch: 0.50,
        bearing: 0.00
      },
      onChapterEnter: [{
        layer: 'district-filled',
        opacity: .62
      }],
      onChapterExit: [{
        layer: 'district-filled',
        opacity: 0
      }]
    },
    {
      id: 'districts',
      title: 'Compost dropoff Locations',
      image: '../images/compost.jpg',
      description: 'Community compost dropoffs are scattered around the city. These are locations where NYC residents can drop off their food scraps to be composted. Each Borough has a varying distribution of dropoff locations and within those boroughs there are varying distributions between Community Districts.',
      location: {
        center: [-73.99258, 40.70341],
        zoom: 9.82,
        pitch: 0.50,
        bearing: 0.00
      },
      onChapterEnter: [{
        layer: 'compost-drop',
        opacity: .71
      }],
      onChapterExit: [{
        layer: 'compost-drop',
        opacity: 0
      }]
    },
    {
      id: 'dropoff-data',
      title: 'Compost dropoffs per Borough',
      image: '../images/drops-borough.png',
      location: {
        center: [-73.99258, 40.70341],
        zoom: 9.82,
        pitch: 0.50,
        bearing: 0.00
      },
      onChapterEnter: [{
          layer: 'district-filled',
          opacity: .62
        },
        {
          layer: 'compost-drop',
          opacity: .71
        }
      ],
      onChapterExit: [{
          layer: 'district-filled',
          opacity: 0
        },
        {
          layer: 'compost-drop',
          opacity: 0
        }
      ]
    },
    {
      id: 'manhattan-in-depth',
      title: 'Manhattan demographics',
      description: 'Manhattan has x number of community districts and x number of compost locations. Compared with the population demographics ....',
      location: {
        center: [-73.96548, 40.78237],
        zoom: 10.88,
        pitch: 18.50,
        bearing: 28.80
      },
      onChapterEnter: [{
          layer: 'manhattan-cd-1',
          opacity: .62
        },
        {
          layer: 'compost-drop',
          opacity: .8
        }
      ],
      onChapterExit: [{
          layer: 'manhattan-cd-1',
          opacity: 0
        },
        {
          layer: 'compost-drop',
          opacity: 0
        }
      ]
    },

    {
      id: 'bronx-in-depth',
      title: 'Bronx demographics',
      image: './path/to/image/source.png',
      description: 'The Bronx has x number of community districts and x number of compost locations. Compared with the population demographics ....',
      location: {
        center: [-73.88692, 40.84831],
        zoom: 11.47,
        pitch: 18.50,
        bearing: -11.20
      },
      onChapterEnter: [{
          layer: 'bronx-cd',
          opacity: .62
        },
        {
          layer: 'compost-drop',
          opacity: .8
        }
      ],
      onChapterExit: [{
          layer: 'bronx-cd',
          opacity: 0
        },
        {
          layer: 'compost-drop',
          opacity: 0
        }
      ]
    },

    {
      id: 'queens-in-depth',
      title: 'Queens demographics',
      image: './path/to/image/source.png',
      description: 'Queens has x number of community districts and x number of compost locations. Compared with the population demographics ....',
      location: {
        center: [-73.82761, 40.66996],
        zoom: 10.56,
        pitch: 0.00,
        bearing: -20.84
      },
      onChapterEnter: [{
          layer: 'queens-cd',
          opacity: .62
        },
        {
          layer: 'compost-drop',
          opacity: .8
        }
      ],
      onChapterExit: [{
          layer: 'queens-cd',
          opacity: 0
        },
        {
          layer: 'compost-drop',
          opacity: 0
        }
      ]
    },

    {
      id: 'brooklyn-in-depth',
      title: 'Brooklyn demographics',
      image: './path/to/image/source.png',
      description: 'Brooklyn has x number of community districts and x number of compost locations. Compared with the population demographics ....',
      location: {
        center: [-73.96557, 40.65009],
        zoom: 11.09,
        pitch: 5.00,
        bearing: 12.80
      },
      onChapterEnter: [{
          layer: 'brooklyn-cd',
          opacity: .62
        },
        {
          layer: 'compost-drop',
          opacity: .8
        }
      ],
      onChapterExit: [{
          layer: 'brooklyn-cd',
          opacity: 0
        },
        {
          layer: 'compost-drop',
          opacity: 0
        }
      ]
    },

    {
      id: 'staten-island-in-depth',
      title: 'Staten Island demographics',
      image: './path/to/image/source.png',
      description: 'Staten Island has x number of community districts and x number of compost locations. Compared with the population demographics ....',
      location: {
        center: [-74.16502, 40.58795],
        zoom: 10.57,
        pitch: 24.00,
        bearing: 54.40
      },
      onChapterEnter: [{
          layer: 'statenisland-cd',
          opacity: .62
        },
        {
          layer: 'compost-drop',
          opacity: .8
        }
      ],
      onChapterExit: [{
          layer: 'statenisland-cd',
          opacity: 0
        },
        {
          layer: 'compost-drop',
          opacity: 0
        }
      ]
    },


    {
      id: 'dropoffs',
      title: 'Compost Dropoff Density Visualization',
      description: '3D Visualization of the density of each district\s compost dropoff locations. Manhattan Community District 3 has the most dropoff locations in the NYC region.',
      location: {
        center: [-74.08294, 40.65377],
        zoom: 10.10,
        pitch: 32.00,
        bearing: -8.80
      },
      onChapterEnter: [{
        layer: 'community-district-final',
        opacity: 1
      }],
      onChapterExit: [{
        layer: 'community-district-final',
        opacity: 0
      }]
    },
    {
      id: 'final',
      title: 'Compost Dropoff Breakdowns',
      image: '../images/logo.png',
      description: 'This storytelling example was put together for Common Ground Compost to test the possibility of using this form of storytelling and data visualizationton for the larger mapping project.',
      location: {
        center: [-73.912662, 40.694550],
        zoom: 9,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [{
          layer: 'district-filled',
          opacity: .62
        },
        {
          layer: 'compost-drop',
          opacity: .71
        }
      ],
      onChapterExit: [{
          layer: 'district-filled',
          opacity: 0
        },
        {
          layer: 'compost-drop',
          opacity: 0
        }
      ]
    }
  ]
};