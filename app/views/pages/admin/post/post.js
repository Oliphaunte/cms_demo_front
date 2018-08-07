import React from 'react'
import { connect } from 'react-redux'
import { updatePost, savePost, fetchData } from '@/app/store/actions/post'
import Form from '@/app/views/components/auth/form'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const url = this.props.location.pathname,
          page_name = url.slice(url.lastIndexOf('/') + 1);

    this.props.fetchData(page_name)
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
    const { post_title, post_featured_image } = this.props

    return(
      <main className='t__post-page'>
        <section className='post-page__title'>
          <Form className='o__post-item' onSubmit={this.savePost}>
            <article className='post-item post-item__title'>
              <label htmlFor='post-title'> Title </label>
              <input
                id='post-title'
                type='text' 
                name='post_title'
                required={true} 
                value={post_title}
                onChange={this.inputChange} />
              <span className='invalid-feedback'></span>
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
                  <label htmlFor='email'> E-mail </label>
                  <input
                    type='file' 
                    id='post-featured-image' 
                    name='post_featured_image' 
                    accept="image/*"
                    onChange={this.inputChange} 
                    required={true} />
                  <span className='invalid-feedback'></span>
                </aside>
              </div>
            </article>

            {/* <article className='post-item post-item__description'>
              <label htmlFor='post-description'> Description </label>
            </article> */}

            <article className='post-item post-item__form-submit'>
              <input type='submit' value='Update' className='button button--submit'/>
            </article>
          </Form>
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
    fetchData: (page_name) => dispatch(fetchData(page_name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)