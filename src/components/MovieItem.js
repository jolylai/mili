import React,{ Component,PropTypes } from 'react'
import { Rate } from 'antd'

class MovieItem extends Component{
  render(){
    let { movie } = this.props;
    return (
      <div className="movie-item">
        <div className="movie-poster">
          <img src="http://51kanmeiju.com/media/ftp/2016/0225/b9d8855658f25099c102e15c65d5535e.jpg"/>
        </div>
        <div className="movie-rating">
          <Rate value={ 4 }/>
        </div>
        <span>{ }</span>
        <span>{ }</span>
      </div>
    )
  }
}

MovieItem.PropTypes = {
  movie: PropTypes.object.isRequired
};
export default MovieItem;
