import React                from 'react';
import ReactDOM             from 'react-dom';
import createReactClass     from 'create-react-class';
import Masonry              from 'react-masonry-component';

import GalleryItem          from './_items';

let gallery_data = [
  { id: "gallery_item_01",
    image_url: `${require('@/app/assets/images/gallery_image_01.png')}`,
    date: "february 10, 2017",
    header: "Bureaux exquisite delightful carefully curated soft power",
    author: "Presented by Lorem Ipsum"
  },
  { id: "gallery_item_02",
    image_url: `${require('@/app/assets/images/gallery_image_02.png')}`,
    date: "february 2, 2017",
    header: "Sharp bureaux sleepy K-pop carefully curated.",
    author: "Presented by Lorem Ipsum"
  },
  { id: "gallery_item_03",
    image_url: `${require('@/app/assets/images/gallery_image_03.png')}`,
    date: "January 27, 2017",
    header: "St Mortiz uniforms Beams",
    author: "Presented by Lorem Ipsum"
  },
  { id: "gallery_item_04",
    image_url: `${require('@/app/assets/images/gallery_image_04.png')}`,
    date: "january 21, 2017",
    header: "Esse airport veniam ryokan soft power.",
    author: "Presented by Lorem Ipsum"
  },
  { id: "gallery_item_05",
    image_url: `${require('@/app/assets/images/gallery_image_05.png')}`,
    date: "january 18, 2017",
    header: "K-pop extraordinary",
    author: "Presented by Lorem Ipsum"
  },
  { id: "gallery_item_06",
    image_url: `${require('@/app/assets/images/gallery_image_06.png')}`,
    date: "january 12, 2017",
    header: "Artisanal iconic cutting-edge business class",
    author: "Presented by Lorem Ipsum"
  }
]

let Gallery = createReactClass({
  render() {
    const masonryOptions = {
      transitionDurations: 0
    };

    return (
      <Masonry className='o__home-gallery' options={masonryOptions} elementType={'div'}>
        { gallery_data.map((gallery_item) => {
          return (
            <GalleryItem data={gallery_item} key={gallery_item.id}/> 
          )
        })}
      </Masonry>
    );
  }
});

module.exports = Gallery;