import React                from 'react'
import ReactDOM             from 'react-dom'
import { connect }          from 'react-redux'
import createReactClass     from 'create-react-class'
import Slider               from 'react-slick'
import { fetchSlides }      from '@/app/store/actions/slide'
import Slide                from '@/app/views/components/client/slides'

const settings = {
  arrows: false,
  dots: true,
  autoplay: true,
  speed: 500,
  infinite: true,
  slidesToShow: 1,
  SlidesToScroll: 3
}

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state ={}
  }

  componentDidMount() {
    this.props.fetchSlides()
      .then(() => console.log('Slides have been loaded'))
      .catch(err => console.error(err))
  }

  render() {
    const { slides } = this.props

    return (
      <Slider {...settings}>
        { slides.map(slide =>
          <Slide data={slide} key={slide.id} />
        )}
      </Slider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    slides: state.slides
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSlides: () => dispatch(fetchSlides())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)