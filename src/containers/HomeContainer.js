import React,{ Component,PropTypes } from 'react'
import { Carousel } from 'antd';
import { connect } from 'react-redux'
import { loadHomeBannerMovies } from '../actions/MovieActions'

class HomeContainer extends Component{
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(loadHomeBannerMovies());
  }
  render(){
    // let movies = this.props.bannerMovies.movies;
    // let banner = [];
    // movies.forEach((movie) => {
    //   banner.push(
    //     <div>
    //       <img src={ 'http://51kanmeiju.com' + movie.poster }/>
    //     </div>
    //   )
    // })
    return (
      <div className="content">
        <h1 style={{color: '#fff'}}>haha </h1>
      </div>
    )
  }
}
HomeContainer.PropTypes = {
  bannerMovies: PropTypes.object.isRequired
};
const mapStateToProps = (state) => {
  const { movie } = state;
  const { bannerMovies } = movie;
  return {
    bannerMovies
  }
};

export default connect(mapStateToProps)(HomeContainer);
