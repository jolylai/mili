import React,{ Component,PropTypes } from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router'

class MovieItem extends Component{
  render(){
    let { movie } = this.props;
    return (
      <div className="movie-item">
        <div className="movie-poster">
          <Link to={ 'movie/' + movie.id }>
            <img src={"http://51kanmeiju.com" + movie.poster}/>
          </Link>
        </div>
        <div className="movie-rating">
          <Icon type="star" />&nbsp;&nbsp;&nbsp;&nbsp;{ movie.hot_number }
        </div>
        <h3>{ movie.name }</h3>
        <span>{ movie.from_year }</span>
      </div>
    )
  }
}

MovieItem.PropTypes = {
  movie: PropTypes.object.isRequired
};
export default MovieItem;
