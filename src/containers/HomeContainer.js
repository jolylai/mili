import React,{ Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadHomeBannerMovies,loadHotMovies,loadHomePromotionMovies } from '../actions/MovieActions'
import MovieSlider from '../components/MovieSlider'

class HomeContainer extends Component{
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(loadHomeBannerMovies());
    dispatch(loadHotMovies());
    dispatch(loadHomePromotionMovies());
  }
  render(){
    const { hots,bannerMovies,promotions } = this.props;
    return (
      <div className="content">
        <MovieSlider title="热门美剧" allLink="/views/hot" sliderItems={ hots.movies }/>
        <MovieSlider title="最新更新" allLink="/views/newest" sliderItems = { bannerMovies.movies }/>
        <MovieSlider title="智能推荐" sliderItems = { promotions.movies }/>
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
  const { bannerMovies,hots,promotions } = movie;
  return {
    bannerMovies,
    hots,
    promotions
  }
};

export default connect(mapStateToProps)(HomeContainer);
