import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'

const Banner = () => {
  return (

    <div className='mt-sm-5 mt-md-3'>
      <img
        className=" w-100"
        src={img2}
        alt=""
      />
    </div>

  );
};

export default Banner;