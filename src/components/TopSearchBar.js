import React,{ Component } from 'react'
import { Icon } from 'antd'

class TopSearchBar extends Component{
  render(){
    return (
      <div className="top-search-bar">
          <div className="logo">
            <img src="../images/logo.png"/>
          </div>
          <div className="search-input">
            <input placeholder="Search.."/>
            <button>
              <Icon type="search" />
            </button>
          </div>
      </div>
    )
  }
}
export default TopSearchBar;
