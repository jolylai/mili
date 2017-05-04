import React,{ Component,PropTypes } from 'react'
import { Carousel } from 'antd';
import { connect } from 'react-redux'
import { loadHomeBannerMovies,loadHotMovies } from '../actions/MovieActions'
import MovieSlider from '../components/MovieSlider'

class HomeContainer extends Component{
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(loadHomeBannerMovies());
    dispatch(loadHotMovies());
  }
  render(){
    const { hots } = this.props;
    console.log(hots)
    return (
      <div className="content">
        <h1 style={{color: '#fff'}}>haha </h1>
        <MovieSlider title="热门美剧" allLink="/views/hot" movies={ hots.movies }/>
      </div>
    )
  }
}
HomeContainer.PropTypes = {
  bannerMovies: PropTypes.object.isRequired,
  hots: PropTypes.object.isRequired
};
const mapStateToProps = (state) => {
  const { movie } = state;
  const { bannerMovies,hots } = movie;
  return {
    bannerMovies,
    hots
  }
};

export default connect(mapStateToProps)(HomeContainer);
