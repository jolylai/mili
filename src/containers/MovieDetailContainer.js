/**
 * Created by Jolylai on 2017/5/6.
 */
import React,{ Component } from 'react'
import { loadMovie } from '../actions/MovieActions'
import { connect } from 'react-redux'
import MovieDetailContent from '../components/MovieDetailContent'
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class MovieDetailContainer extends Component{
  componentDidMount(){
    const { dispatch,params } = this.props;
    dispatch(loadMovie(params.id));
  }
  handleTabsClick(){

  }
  render(){
    const { viewing } = this.props;
    return (
      <div className="movie-detail">
        <MovieDetailContent movie={ viewing }/>
        <Tabs defaultActiveKey="1" onChange={this.handleTabsClick} style={{color: '#fff'}}>
          <TabPane tab="影剧资料" key="1">Content of Tab  Pane 1</TabPane>
          <TabPane tab="热门评论" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="下载链接" key="3">Content of Tab Pane 3</TabPane>
          <TabPane tab="导演&演员" key="4">Content of Tab Pane 4</TabPane>
        </Tabs>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    viewing: state.movie.viewing
  }
};
export default connect(mapStateToProps)(MovieDetailContainer);
