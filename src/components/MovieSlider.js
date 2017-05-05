import React,{ Component } from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router'
import MovieItem from './MovieItem'
import Slider from 'react-slick';
//import 'slick-carousel';

import '../styles/movieSlider.sass'

const defaultProps = {
  settings: {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    noPretitle: false,
  }
};

class MovieSlider extends Component{
  next() {
    this.refs.slider.slickNext();
  }
  prev() {
    this.refs.slider.slickPrev();
  }
  render(){
    const { title,sliderItems,allLink,settings } = this.props;
    let slider = '';
    if (sliderItems.length > 0){
      let sliderHTML = [];
      sliderItems.forEach((sliderItem,index) => {
        sliderHTML.push(
          <div className="owl-item" key={ index }>
            <MovieItem movie={ sliderItem }/>
          </div>
        )
      });
      slider = <Slider ref="slider" {...settings}>{sliderHTML}</Slider>
    }
    let linkMore;
    if (allLink){
      linkMore = <span className="link-more"><Link to={ allLink }>查看全部</Link>/{ sliderItems.length }</span>
    }
    return (
      <div className="movie-slider">
        <header>
          <h1>{ title }</h1>
          <a className="movie-slider-right" onClick={ this.next.bind(this)}><Icon type="right" /></a>
          <a className="movie-slider-left" onClick={ this.prev.bind(this)}><Icon type="left" /></a>
          { linkMore }
        </header>
        <div className="movie-slider-content">
          { slider }
        </div>
      </div>
    )
  }
}

MovieSlider.defaultProps = defaultProps;

export default MovieSlider;
