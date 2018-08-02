import React                from 'react'
import { connect }          from 'react-redux'
import Masonry              from 'react-masonry-component'
import Post                 from '@/app/views/components/client/post'
import { fetchPosts }      from '@/app/store/actions/posts'
import gallery_data         from '@/app/components/organisms/home/gallery_data'

function imagesLoaded(parentNode) {
  const imgElements = [...parentNode.querySelectorAll("img")]
  for (let i = 0; i < imgElements.length; i++) {
    const img = imgElements[i]
    if (!img.complete) return false
  }
  return true
}

class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  componentDidMount() {
    this.props.fetchPosts()
      .then(() => console.log('Posts have been loaded'))
      .catch(err => console.error(err))
  }

  render() {
    console.log(this.props)
    const { posts } = this.props
    const masonryOptions = {
      transitionDurations: 0
    }

    return (
      <Masonry className='o__home-gallery' options={masonryOptions} elementType={'div'}>
        { posts.map(post => 
          <Post data={post} key={post.id} ref={element => {this.post = element}} /> 
        )}
      </Masonry>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isfetching: state.isFetching,
    isLoading: state.isLoading,
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)