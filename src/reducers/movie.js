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
  category: [],
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
  categoryMovies: {
    total: 1,
    movies: []
  }
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
      });
    case 'REQUEST_MOVIE_HOT':
      return Object.assign({},state,{
        hots: {
          total: action.hots.total,
          movies: action.hots.list
        }
    });
    case 'REQUEST_MOVIE_PROMOTION':
      return Object.assign({},state,{
        promotions:{
          total: action.promotions.total,
          movies: action.promotions.list
        }
      });
    case 'REQUEST_MOVIE_LAST':
      return Object.assign({},state,{
        lastMovies:{
          total: action.lastMovies.total,
          movies: action.lastMovies.list
        }
      });
    case 'REQUEST_CATEGORY':
      return Object.assign({},state,{
        category: action.category
      });
    case 'REQUEST_CATEGORY_MOVIES':
      return Object.assign({},state,{
        categoryMovies: {
          total: action.categoryMovies.total,
          movies: action.categoryMovies.list
        }
      });
    case 'REQUEST_MOVIE':
      return Object.assign({},state,{
        viewing: action.movie
      });
    default:
      return state
  }
}
