import React,{ Component } from 'react';
import { Menu,Icon } from 'antd'
import { Link } from 'react-router'


const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;

class MovieFilter extends Component{
  render(){
    const { years,categories} = this.props;
    let yearsLink = [];
    years.forEach((year) => {
      yearsLink.push(
        <Menu.Item key={year.year}>
          <Link to={'/views/year/' + year.year}>
            { year.year == 0 ? "其他" : year.year }
          </Link>
        </Menu.Item>
      )
    });
    let categoriesLink = [];
    categories.forEach((category) => {
      categoriesLink.push(
        <Menu.Item key={category.id}>
          <Link to={'/views/category/' + category.id}>
            <Icon type="tag-o" />{category.name}<span>{category.total}</span>
          </Link>
        </Menu.Item>
      )
    })
    return (
      <div className="sider">
        <Menu theme="dark" mode="inline">
          <MenuItemGroup key="G1" title="菜单导航">
            <Menu.Item key="i1">
              <Link to="/">
                <Icon type="home" />首页
              </Link>
            </Menu.Item>
            <Menu.Item key="i2">
              <Link to="/views/hot">
                <Icon type="video-camera" />热门美剧
              </Link>
            </Menu.Item>
            <Menu.Item key="i3">
              <Link to="/views/newest">
                <Icon type="clock-circle-o" />本周最新
              </Link>
            </Menu.Item>
            <Menu.Item key="i4">
              <Link to="/views/topic">
                <Icon type="heart-o" />美剧时评
              </Link>
            </Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="G2" title="美剧类目">
            { categoriesLink }
          </MenuItemGroup>
          <SubMenu key="G3" title="发布年份">
            { yearsLink }
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default MovieFilter;
