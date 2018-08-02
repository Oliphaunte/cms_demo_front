import React                from 'react'
import ReactDOM             from 'react-dom'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {post_title, post_featured_image} = this.props.data

    return (
      <div className="m__main-item" ref={element => {this.post = element}}>
        <img src={post_featured_image} />
        
        <aside>
          <h4>{post_title}</h4>
        </aside>
      </div>
    )
  }
}

export default Post