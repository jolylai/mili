import fetch from 'isomorphic-fetch';

const movieYears = () => {
  return dispatch => {
    fetch('/api/movieyears')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({
          type: 'REQUEST_MOVIE_YEARS',
          years: json['data']
        })
      })
      .catch((err) => {
        throw err;
      });
  }
};

const loadCategories = () => {
  return dispatch => {
    fetch('/api/category')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        dispatch({
          type: 'REQUEST_MOVIE_CATEGORIES',
          categories: json['data']
        })
      }
      )
  }
};

export const initMovieYearsAndCategories = () => {
  return dispatch => {
    dispatch(movieYears()),
    dispatch(loadCategories())
  }
};
//HomeBannerMovie
export const loadHomeBannerMovies = () => {
  return dispatch => {
    fetch('/api/movielast?limit=10')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        dispatch({
          type: 'REQUEST_MOVIE_BANNER',
          bannerMovies: json['data']
        })
      })
  }
};
// 获取热门电影
export const loadHotMovies = () => {
  return dispatch => {
    fetch('/api/moviehot?limit=20&page=1')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        dispatch({
          type: 'REQUEST_MOVIE_HOT',
          hots: json.data
        })
      })
  }
};
// 获取智能推荐
export const loadHomePromotionMovies = () => {
  return dispatch => {
    fetch('/api/moviepromotion?limit=10')
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      dispatch({
        type: 'REQUEST_MOVIE_PROMOTION',
        promotions: json.data
      })
    })
  }
};
// 获取本周最新电影
export const loadLastMovies = () => {
  return dispatch => {
    fetch('/api/movielast?limit=20&page=1')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        dispatch({
          type: 'REQUEST_MOVIE_LAST',
          lastMovies: json.data
        })
      })
  }
};
// 获取单个美剧类目
export const loadCategory = (id) => {
  return dispatch => {
    fetch('/api/category/' + id)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        dispatch({
          type: 'REQUEST_CATEGORY',
          category: json.data
        })
      })
  }
};
// 获取单个美剧类目的内容
export const loadMoviesInCategory = (id) => {
  return dispatch => {
    fetch('/api/categorymovies/' + id + '?page=1&limit=20')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        dispatch({
          type: 'REQUEST_CATEGORY_MOVIES',
          categoryMovies: json.data
        })
      })
  }
};
// 获取电影的内容
export const loadMovie = (id) => {
  return dispatch => {
    fetch('/api/movie/' + id)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        dispatch({
          type: 'REQUEST_MOVIE',
          movie: json.data
        })
      })
  }
};
