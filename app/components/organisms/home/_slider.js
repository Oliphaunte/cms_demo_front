import React                from 'react';
import ReactDOM             from 'react-dom';
import createReactClass     from 'create-react-class';
import Slider               from 'react-slick';

import Slide                from './_slides'

let slide_data = [
  { id: "slide_data_01",
    image_url: `${require('@/app/assets/images/hero_1.png')}`,
    title_01: "screening",
    title_02: "DVF secret agent part 2",
    date: "october 15, 2017",
    text: "Join us for a private screening of DVF Secret Agent Part 2 with our special guest."
  },
  { id: "slide_data_02",
    image_url: `${require('@/app/assets/images/hero_2.png')}`,
    title_01: "screening",
    title_02: "DVF secret agent part 2",
    date: "october 15, 2017",
    text: "Join us for a private screening of DVF Secret Agent Part 2 with our special guest."
  },
  { id: "slide_data_03",
    image_url: `${require('@/app/assets/images/hero_3.png')}`,
    title_01: "screening",
    title_02: "DVF secret agent part 2",
    date: "october 15, 2017",
    text: "Join us for a private screening of DVF Secret Agent Part 2 with our special guest."
  },
];

let Gallery_Slider = createReactClass({
  render() {
    let settings = {
      arrows: false,
      dots: true,
      autoplay: true,
      speed: 500,
      infinite: true,
      slidesToShow: 1,
      SlidesToScroll: 3
    };

    return (
      <Slider {...settings}>
        { slide_data.map((slide) => {
          return (
            <div key={slide.id}>
              <Slide data={slide} />
            </div>
          )
        })}
      </Slider>
    );
  }
});

module.exports = Gallery_Slider;