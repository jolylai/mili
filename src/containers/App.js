import React,{ Component,PropTypes } from 'react'
import TopSearchBar from '../components/TopSearchBar'
import SiderComponent from  '../components/MovieFilter'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import '../styles/common.sass'

class App extends Component{
  render(){
    return (
      <Layout className="common">
        <Header className="header">
          <TopSearchBar/>
        </Header>
        <Layout className="sider-content">
          <Sider className="sider">
            <SiderComponent/>
          </Sider>
          <Content className="content">
            content
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
export default App;
