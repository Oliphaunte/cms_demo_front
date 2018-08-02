import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Modal from '@/app/views/modals/modal'
import ModalDelete from '@/app/views/modals/delete'

class AdminPostItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  _deletePost = (e) => {
    e.preventDefault()

    this.props.deletePost(this.props.post.post_title)
  }

  formatTime = (time) => {
    let time_options = { month : 'long', day : 'numeric', year : 'numeric' }
    let timeFormatted = new Date(time).toLocaleDateString('en-GB', time_options)

    return timeFormatted
  }

  render() {
    let { post, match } = this.props
    console.log(this.props)
    return (
      <article className='admin-posts__post'>
        <div className='m__admin-posts--wrapper'>
          <img src={post.post_featured_image} />

          <aside className='wrapper__buttons'>
            <span>
              <Link to='#' onClick={this._deletePost} className='button button--delete'>Delete</Link>
            </span>
            <span>
              <Link to={match.path + '/posts/' + encodeURIComponent(post.post_title)} className='button button--edit'>Edit</Link>
            </span>
          </aside>
        </div>

        <h2> {post.post_title} </h2>
        <h3> Created on: {this.formatTime(post.created_at)} </h3>
      </article>
    )
  }
}

export default withRouter(AdminPostItem)