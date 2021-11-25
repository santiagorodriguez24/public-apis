export const publicApis = [
  {
    API: 'Axolotl',
    Description: 'Collection of axolotl pictures and facts',
    Auth: '',
    HTTPS: true,
    Cors: 'yes',
    Link: 'https://theaxolotlapi.netlify.app/',
    Category: 'Animals',
  },
  {
    API: 'Cat Facts',
    Description: 'Daily cat facts',
    Auth: '',
    HTTPS: true,
    Cors: 'no',
    Link: 'https://alexwohlbruck.github.io/cat-facts/',
    Category: 'Animals',
  },
  {
    API: 'Cataas',
    Description: 'Cat as a service (cats pictures and gifs)',
    Auth: '',
    HTTPS: true,
    Cors: 'no',
    Link: 'https://cataas.com/',
    Category: 'Animals',
  },
  {
    API: 'catAPI',
    Description: 'Random pictures of cats',
    Auth: '',
    HTTPS: true,
    Cors: 'yes',
    Link: 'https://thatcopy.pw/catapi',
    Category: 'Animals',
  },
];

export const mockedStore = {
  publicApis: {
    publicApis: publicApis,
    error: '',
    count: 4,
  },
};
