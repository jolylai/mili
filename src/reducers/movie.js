const initState = {
  items: {
    total: 1,
    movies: [],
  },
  isFetching: false,
  viewing: {
    company: {},
    created: 0,
    updated: 0,
    categories: [],
    sub_category: {}
  },
  years: [],
  categories: [],
  hots: {
    total: 1,
    movies: []
  },
  promotions: {
    total: 1,
    movies: []
  },
  bannerMovies: {
    total: 1,
    movies: []
  },
  comments: [],
  hotComments: [],
  lastComment: {

  },
  relatedMovies: {
    total: 1,
    movies: []
  },
  lastMovies: {
    total: 1,
    movies: []
  },
};

export default function movie(state = initState, action) {
  switch (action.type) {
    case 'REQUEST_MOVIE_YEARS':
      return Object.assign({},state,{
        years: action.years
      });
    case 'REQUEST_MOVIE_CATEGORIES':
      return Object.assign({},state,{
        categories: action.categories
      });
    case 'REQUEST_MOVIE_BANNER':
      return Object.assign({},state,{
        bannerMovies: {
          total: action.bannerMovies.total,
          movies: action.bannerMovies.list
        }
      })
    default:
      return state
  }
}
