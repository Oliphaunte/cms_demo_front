import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {post_title, post_featured_image} = this.props.data

    return (
      <Link to={{ pathname: '/posts/' + post_title, state: { data: this.props.data }}} className='m__main-item' ref={element => {this.post = element}}>
        <img src={post_featured_image} />
        
        <aside>
          <h4>{post_title}</h4>
        </aside>
      </Link>
    )
  }
}

export default Post