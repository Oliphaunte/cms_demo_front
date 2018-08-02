import React                from 'react'
import ReactDOM             from 'react-dom'
import createReactClass     from 'create-react-class'

let imageStyling = (image_url) => {
  return {
    backgroundImage: `url(${image_url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
}

let Slide = createReactClass({
  render() {
    console.log(this.props.data)
    const { slide_image } = this.props.data

    return (
      <div className="slick-slide-bleh" style={ imageStyling(slide_image) }>
        <div className="caption-slick-slider">
        </div>
      </div>
    )
  }
})

export default Slide