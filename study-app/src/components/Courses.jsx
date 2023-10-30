import React from 'react';
import CoursesCard from '../layouts/CoursesCard';
import img1 from '../assets/digital.png'
import img2 from '../assets/cloud.avif'
import img3 from '../assets/webdev.jpg'
import img4 from '../assets/microsoft.png'
import img5 from '../assets/graphic1.avif'
import img6 from '../assets/vidio.jpg'


const Courses = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5" style={{ marginTop: '-70px' }}>
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10" style={{ color: '#539165' }}>
        Our Courses
      </h1>
      <div className=" flex flex-wrap font-semibold  text-center pt-20 pb-10 gap-5 justify-center" style={{ marginTop: '-80px' }}> 
        <CoursesCard img={img1} title="Digital Marketing" price={<span style={{ color: '#539165' }}>Rp.2000.000</span>} />
        <CoursesCard img={img2} title="Cloud Computing" price={<span style={{ color: '#539165' }}>Rp.2000.000</span>} />
        <CoursesCard img={img3} title="Web Developer" price={<span style={{ color: '#539165' }}>Rp.2000.000</span>} />
        <CoursesCard img={img4} title="Microsoft Professional" price={<span style={{ color: '#539165' }}>Rp.2000.000</span>} />
        <CoursesCard img={img5} title="Design Grafis" price={<span style={{ color: '#539165' }}>Rp.2000.000</span>} />
        <CoursesCard img={img6} title="Vidio Editing" price={<span style={{ color: '#539165' }}>Rp.2000.000</span>} />
      </div>
    </div>
  );
};

export default Courses;