import fetch from 'isomorphic-fetch';

const movieYears = () => {
  return dispatch => {
    fetch('/movieyears')
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
    fetch('/category')
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

export const loadHomeBannerMovies = () => {
  return dispatch => {
    fetch('/HomeBannerMovie')
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
    fetch('/hotMovies')
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
}
