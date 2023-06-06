import React from 'react';
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import img7 from '../../assets/7.jpg'
import img8 from '../../assets/8.jpg'
import './OurGallery.css'
const OurGallery = () => {
  return (
    <div className='mt-5 mb-5 ms-2 mr-2'>
      <div class="row">
        <div class="col">
          <img className='gallery' src={img1} alt="" />
        </div>
        <div class="col">
          <img className='gallery' src={img2} alt="" />
        </div>
        <div class="col">
          <img className='gallery' src={img3} alt="" />
        </div>
        <div class="col">
          <img className='gallery' src={img4} alt="" />
        </div>

        <div class="col mt-3">
          <img className='gallery' src={img5} alt="" />
        </div>
        <div class="col mt-3">
          <img className='gallery' src={img6} alt="" />
        </div>
        <div class="col mt-3">
          <img className='gallery' src={img7} alt="" />
        </div>
        <div class="col mt-3">
          <img className='gallery' src={img8} alt="" />
        </div>

      </div>
    </div>
  );
};

export default OurGallery;