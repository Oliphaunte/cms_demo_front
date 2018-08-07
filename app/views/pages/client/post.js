import React                from 'react'
import { connect }          from 'react-redux'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  componentDidMount() {}

  render() {
    const { post_title, post_featured_image } = this.props.location.state.data

    return (
      <main className='t__client-post'>
        <section className='client-post__container'>
          <h3>{post_title}</h3>
          <img src={post_featured_image} />
        </section>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)