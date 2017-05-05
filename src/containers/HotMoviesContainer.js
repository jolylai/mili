import React,{ Component } from 'react'
import { connect } from 'react-redux'
import ListView from '../components/ListView'
import { loadHotMovies } from '../actions/MovieActions'
import { Pagination } from 'antd'

class HotMoviesContainer extends Component{
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(loadHotMovies());
  }
  onChange(){

  }
  render(){
    const { hotMovies } = this.props;
    return (
      <div className="hot-movie-container">
        <ListView title="热门美剧" movies={ hotMovies.movies }/>
        <Pagination showQuickJumper defaultCurrent={2 } total={500} onChange={this.onChange} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { hots } = state.movie;
  return {
    hotMovies: hots
  }
};
export default connect(mapStateToProps)(HotMoviesContainer);
