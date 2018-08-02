import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { fetchPosts, deletePost } from '@/app/store/actions/posts'
import { saveSlide, fetchSlides, deleteSlide } from '@/app/store/actions/slide'
import AdminPostItem from '@/app/views/components/admin/post'
import AdminSlide from '@/app/views/components/admin/slide'
import Loading from '@/app/views/components/loading'

const settings = {
  arrows: false,
  dots: true,
  autoplay: false,
  speed: 500,
  infinite: true,
  slidesToShow: 1,
  SlidesToScroll: 3,
  className: 'admin-slider__slider'
}

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchSlides()
      .then(() => console.log('Slides have been loaded'))
      .catch(err => console.error(err))

    this.props.fetchPosts()
      .then(() => console.log('Posts have been loaded'))
      .catch(err => console.error(err))
  }

  formatTime = (time) => {
    let date = new Date(time * 1000)

    //     month = date.getMonth()
    //     year = date.getYear()
    //     day = date.getDay()

    // return day + month + year
  }

  addSlide = (e) => {
    e.preventDefault

    let slide_form = e.target.form
    const data = new FormData(slide_form)

    this.props.saveSlide(data)
      .then(() => console.log('slides added'))
      .catch(err => console.error(err))
  }

  deleteSlide= (slide) => {
    this.props.deleteSlide(slide)
      .then(() => console.log('Deleted Slide'))
      .catch(err => console.error(err))
  }

  deletePost = (post_title) => {
    this.props.deletePost(post_title)
      .then(() => console.log('Deleted Post'))
      .catch(err => console.error(err))
  }

  render() {
    const { posts, slides, match, slider } = this.props

    return (
      <main className='t__admin-page'>        
        <section className='admin-page__slider'>
          <div className='o__admin-slider'>
            <article className='admin-slider__header'>
              <h2> Slider </h2>
            </article>

            <article className='admin-slider__slider'>
              <Slider {...settings}>
                {slides.map(slide => 
                  <AdminSlide key={slide.id} data={slide} deleteSlide={this.deleteSlide}/>
                )}

                <div className={'m__admin-slide--new ' + (slider.sliderPending ? 'disabled' : '')}>
                  <form className='new-slide' encType="multipart/form-data" noValidate>
                    { slider.sliderPending ? 
                      (
                        <React.Fragment>
                          <label>Image uploading</label>
                          <input type='file' name='admin_slide' accept='image/*' disabled/>
                        </React.Fragment>
                      ) : 
                      (
                        <React.Fragment>
                          <label htmlFor='post-featured-image'> Drag image file here or click to select </label>
                          <input type='file' name='admin_slide' accept='image/*' onChange={this.addSlide}/>
                        </React.Fragment>
                      )
                    }
                    
                  </form>
                </div>
              </Slider>
            </article>
          </div>
        </section>

        <section className='admin-page__posts'>
          <div className='o__admin-posts'>
            <article className='admin-posts__header'>
              <h2> Posts </h2>
              <Link to='/admin/posts/new' className='button button--new'> Add new post </Link>
            </article>

          { posts.map(post =>
            <AdminPostItem post={post} key={post.id} deletePost={this.deletePost}></AdminPostItem>
          )}
          </div>
        </section>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    slider: state.slider,
    slides: state.slides,
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSlides: () => dispatch(fetchSlides()),
    saveSlide: (slide) => dispatch(saveSlide(slide)),
    deleteSlide: (slide) => dispatch(deleteSlide(slide)),
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (post) => dispatch(deletePost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)