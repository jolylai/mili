import React,{ Component } from 'react'
import { Menu,Icon } from 'antd'
// import { Link } from 'react-router'

const MenuItemGroup = Menu.ItemGroup;

class SiderComponent extends Component{
  render(){
    return (
      <div className="sider">
        <Menu theme="dark">
          <MenuItemGroup key="G1" title="菜单导航">
            <Menu.Item key="1">
              {/*<Link to="/">*/}
                <Icon type="home" />首页
              {/*</Link>*/}
            </Menu.Item>
            <Menu.Item key="2">
              {/*<Link to="/views/hot">*/}
                <Icon type="video-camera" />热门美剧
              {/*</Link>*/}
            </Menu.Item>
            <Menu.Item key="3">
              {/*<Link to="/views/newest">*/}
                <Icon type="clock-circle-o" />本周最新
              {/*</Link>*/}
            </Menu.Item>
            <Menu.Item key="4">
              {/*<Link to="/views/topic">*/}
                <Icon type="heart-o" />美剧时评
              {/*</Link>*/}
            </Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="G2" title="美剧类目">
            <Menu.Item key="1">
              <Icon type="compass" />剧情
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="compass" />喜剧
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="compass" />记录
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="compass" />科幻
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="compass" />动作
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="compass" />动画
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="compass" />悬疑
            </Menu.Item>
          </MenuItemGroup>
        </Menu>
      </div>
    )
  }
}
export default SiderComponent;
