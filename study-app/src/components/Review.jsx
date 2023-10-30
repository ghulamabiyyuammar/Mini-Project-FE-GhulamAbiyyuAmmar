import React from 'react';
import ReviewCard from '../layouts/ReviewCard';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpg';

const Review = () => (
  <div className="min-h-screen flex flex-col items-center justify-center md:px-30 px-5" style={{ marginTop: '-80px' }}>
    <div className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
      <h3 style={{ color: '#539165' }}>Our Review</h3>

      <div className="text-lightText mt-2 text-start flex flex-col md:flex-row gap-4 mt-4" >
        <ReviewCard img={img1} name="Andromeda" />
        <ReviewCard img={img2} name="John Doe" />
        <ReviewCard img={img3} name="Shafira" />
      </div>
    </div>
  </div>
);

export default Review;
