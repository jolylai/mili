import React,{ Component } from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router'
import '../styles/listView.sass'

class ListView extends Component{
  render(){
    const { title,movies } =this.props;
    console.log(movies)
    let list = []
    movies.forEach((movie) => {
      list.push(
        <article key={ movie.id}>
          <div className="movie-poster">
            <Link to={ 'movie/' + movie.id }>
              <img src={"http://51kanmeiju.com" + movie.poster}/>
            </Link>
          </div>
          <div className="movie-rating">
            <Icon type="star" />&nbsp;&nbsp;&nbsp;&nbsp;{ movie.hot_number }
          </div>
          <h3>{ movie.name }</h3>
          <span>{ movie.from_year }</span>
        </article>
      )
    })
    return (
        <div className="list-view">
          <header>
            <h1>{ title }</h1>
          </header>
          <div className="movies-list">
            { list  }
          </div>
        </div>
      )
  }
}

export default ListView;
