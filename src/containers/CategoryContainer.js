import React,{ Component,PropTypes } from 'react'
import { loadCategory,loadMoviesInCategory } from '../actions/MovieActions'
import { connect } from 'react-redux'
import ListView from '../components/ListView'

class CategoryContainer extends Component{
  componentDidMount(){
    const { dispatch,params } = this.props;
    dispatch(loadCategory(params.id));
    dispatch(loadMoviesInCategory(params.id))
  }
  // 切换类目
  componentWillReceiveProps(nextProps){
    const { dispatch,params } = nextProps;
    if ( params.id !== this.props.params.id ){
      dispatch(loadCategory(params.id));
      dispatch(loadMoviesInCategory(params.id))
    }
  }
  render(){
    const { category,categoryMovies } = this.props;
    return (
      <div className="category">
        <ListView title={ category.name } movies={ categoryMovies.movies }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { category,categoryMovies } = state.movie;
  return {
    category: category,
    categoryMovies: categoryMovies
  }
};

export default connect(mapStateToProps)(CategoryContainer);
