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
    case 'REQUEST_MOVIE':
      try {
        action.movie.download_links = JSON.parse(action.movie.download_links);
      }
      catch (e) {
        console.log("解析下载链接失败");
      }
      return Object.assign({}, state, {
        viewing: action.movie
      });
    default:
      return state
  }
}
