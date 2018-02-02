import React                from 'react';
import ReactDOM             from 'react-dom';
import createReactClass     from 'create-react-class';

let GalleryItem = createReactClass({
  render() {
    const {image_url, date, header, author} = this.props.data

    return (
      <div className="m__main-item">
        <img src={image_url}/>
        
        <aside>
          <h5>{date}</h5>
          <h4>{header}</h4>
          <p>{author}</p>
        </aside>
      </div>
    )
  }
});

export default GalleryItem;