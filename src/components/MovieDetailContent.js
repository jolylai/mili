/**
 * Created by Jolylai on 2017/5/6.
 */

import React,{ Component,PropTypes } from 'react'
import { toDateString } from '../utils/TimeUtil'
import { Rate } from 'antd'
import { Link } from 'react-router'

import '../styles/movieDetailContent.sass'

class MovieDetailContent extends Component{
  renderCategory(){
    return this.props.movie.categories.map((category,index) => {
      return <Link key={index} to={'/views/category/' + category.id}>{category.name}</Link> ;
    })
  }
  render(){
    const { movie} = this.props;
    let renderCategory = this.renderCategory();
    return (
      <div className="movie-detail-content">
        <div className="movie-detail-poster">
          <img src={ 'http://51kanmeiju.com' + movie.poster }/>
        </div>
        <div className="movie-detail-data">
          <h1>{ movie.name }</h1>
          <div className="movie-detail-extra">
            <span className="short-desc">{ movie.short_desc }</span>
            <span className="data">发行自：{ movie.from_year } 收录于：{ toDateString(movie.created) } 最后更新：{toDateString(movie.updated)}</span>
            <span className="country">发行国家：({ movie.company.name })</span>
            <span className="desc">{ movie.status_desc } &nbsp;&nbsp;&nbsp;热度：{ movie.hot_number }</span>
          </div>
          <div className="rate">
            <Rate defaultValue={ 3 }/>
          </div>
          <div className="category">
            { renderCategory }
          </div>
        </div>
      </div>
    )
  }
}

MovieDetailContent.PropTypes ={
  movie: PropTypes.object.isRequired
};

export default MovieDetailContent;
