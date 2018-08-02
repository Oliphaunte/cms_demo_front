import React from 'react'

class AdminSlide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  _deletePost = (e) => {
    e.preventDefault()

    this.props.deletePost(this.props.post.post_title)
  }

  render() {
    let { post, match } = this.props

    return (
      <div className='m__admin-slide'> 
        <aside className='slide-image' style={backgroundImage: `url(${image_url})`}/> 

        <aside className='wrapper__buttons'>
          <span>
            <Link to='#' className='button button--delete'>Delete</Link>
          </span>
        </aside>
      </div>
    )
  }
}

export default withRouter(AdminPostItem)