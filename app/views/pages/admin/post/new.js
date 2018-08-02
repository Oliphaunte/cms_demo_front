import React from 'react'
import { connect } from 'react-redux'
import { updatePost, savePost } from '@/app/store/actions/post'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.inputChange = this.inputChange.bind(this)
  }

  componentDidMount() {
    this.props.updatePost('file', 'post_featured_image', '')
  }

  savePost = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    this.props.savePost(data)
      .then(() => this.props.history.push(`/admin/posts/${this.props.post_title}`))
      .catch(err => console.error(err))
  }

  deleteImage = (e) => {
    e.preventDefault()

    this.props.updatePost('file', 'post_featured_image', '')
  }

  inputChange = (e) => {
    e.preventDefault()
    
    switch(e.target.type) {
      case 'text':
        this.props.updatePost('text', e.target.name, e.target.value)
        break;
      case 'file':
        const files = e.target.files || e.dataTransfer.files,
              image = URL.createObjectURL(files[0])

        this.props.updatePost('file', e.target.name, image)
        break;
      default:
        false
    }
  }

  render() {
    let { post_featured_image } = this.props

    return(
      <main className='t__post-page'>
        <section className='post-page__title'>
          <form className='o__post-item' encType='multipart/form-data' method='post' onSubmit={this.savePost}>
            <article className='post-item post-item__title'>
              <label htmlFor='post-title'> Title </label>
              <input 
                type='text' 
                id='post-title' 
                name='post_title'
                onChange={this.inputChange}
                required={true} />
            </article>

            <article className='post-item post-item__featured-image'>
              <div className='m__post-featured-image'>
                <aside className={post_featured_image ? 'show-image' : 'hide-element'} >
                  <img src={post_featured_image} />
                  <span className='delete-button'>
                    <a href='#' className='button button--delete' onClick={this.deleteImage}>Remove Image</a>
                  </span>
                </aside>

                <aside className={post_featured_image ? 'hide-element' : 'show-input'} >
                  <label htmlFor='post-featured-image'> Click to select an image</label>
                  <input 
                    type='file' 
                    id='post-featured-image' 
                    name='post_featured_image' 
                    accept="image/*"
                    onChange={this.inputChange} 
                    required={true} />
                </aside>
              </div>
            </article>

            {/* <article className='post-item post-item__description'>
            </article> */}

            <article className='post-item post-item__form-submit'>
              <input type='submit' value='Update' className='button button--submit'/>
            </article>
          </form>
        </section>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post_title: state.post.post_title, 
    post_featured_image: state.post.post_featured_image 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (type, name, data) => dispatch(updatePost(type, name, data)),
    savePost: (name, data) => dispatch(savePost(name, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)