import React,{ Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadLastMovies } from '../actions/MovieActions'
import ListView from '../components/ListView'

class LastMoviesContainer extends Component{
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(loadLastMovies())
  }
  render(){
    const { lastMovies } = this.props;
    return (
      <div className="last-movie">
        <ListView title="本周更新" movies={ lastMovies.movies }/>
      </div>
    )
  }
}

LastMoviesContainer.PropTypes ={
  lastMovies: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    lastMovies: state.movie.lastMovies
  }
};

export default connect(mapStateToProps)(LastMoviesContainer);
