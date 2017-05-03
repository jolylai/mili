import React,{ Component,PropTypes } from 'react'
import TopSearchBar from '../components/TopSearchBar'
import MovieFilter from  '../components/MovieFilter'
import { Layout } from 'antd';
import { connect } from 'react-redux'
import { initMovieYearsAndCategories } from '../actions/MovieActions'

const { Header, Footer, Sider, Content } = Layout;

import '../styles/common.sass'

class App extends Component{
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(initMovieYearsAndCategories());
  }
  render(){

    return (
      <Layout className="common">
        <Header className="header">
          <TopSearchBar/>
        </Header>
        <Layout className="sider-content">
          <Sider className="sider">
            <MovieFilter {...this.props}/>
          </Sider>
          <Content className="content">
            { this.props.children }
          </Content>
        </Layout>
        <Footer>
          <ul>
            <li><a>关于</a></li>
            <li><a>网站升级日志</a></li>
            <li><a>免责声明</a></li>
          </ul>
          <div>
            Copyright @ Jolylai
            <a>联系我</a>
          </div>
        </Footer>
      </Layout>
    )
  }
}

App.PropTypes = {
  movie: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    years: state.movie.years,
    categories: state.movie.categories
  }
};

export default connect(mapStateToProps)(App);
