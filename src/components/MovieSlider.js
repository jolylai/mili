import React,{ Component } from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router'
import MovieItem from './MovieItem'

import '../styles/movieSlider.sass'

class MovieSlider extends Component{
  render(){
    const { title,movies,allLink } = this.props;
    console.log( movies )
    let linkMore;
    if (allLink){
      linkMore = <span className="link-more"><Link to={ allLink }>查看全部</Link></span>
    }
    return (
      <div className="movie-slider">
        <header>
          <h1>{ title }</h1>
          <a className="movie-slider-left"><Icon type="caret-right" /></a>
          <a className="movie-slider-right"><Icon type="caret-left" /></a>
          { linkMore }
        </header>
        <div className="movie-slider-content">
          <MovieItem movie={ movies[0] }/>
        </div>
      </div>
    )
  }
}

export default MovieSlider;
