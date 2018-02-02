import React                from 'react';
import ReactDOM             from 'react-dom';
import createReactClass     from 'create-react-class';

let imageStyling = (image_url) => {
  return {
    backgroundImage: `url(${image_url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
}

let Slide = createReactClass({
  render() {
    const { image_url, title_01, title_02, date, text } = this.props.data

    return (
      <div className="slick-slide-bleh" style={ imageStyling(image_url) }>
        <div className="caption-slick-slider">
          <h4>{title_01}</h4>
          <h4>{title_02}</h4>
          <h5>{date}</h5>
          <p>{text}</p>
        </div>
      </div>
    )
  }
});

export default Slide;