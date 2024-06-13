import React from 'react';
import './Testi.css';

function Testimonials() {
  return (
    <div className="mb-10">
      <img src="https://i.postimg.cc/TPVyVqBr/YOUR-FEEDBACK-LEAVES-US-THERE-removebg-preview.png" alt="" height="200" width="200" className="absolute z-10 mt-20 left-56"/>
      <img src="https://i.postimg.cc/yd30FH1G/trophy.png" alt="" height="80" width="100" className="ml-[73vw]"/>
        <div className="card ml-[65vw]">
          <div className="font-medium text-sm p-2">
            <p>As a beginner in web development, I was looking for a platform that could offer comprehensive and easy-to-follow courses. This website exceeded my expectations! </p>
            <p className="text-right text-gray-300 mt-4">Sarah L</p>
            <p className="text-sm text-right text-gray-400"> - Junior Web Developer</p>
          </div>
        </div>
        <div className="card ml-[40vw] mt-1">
          <div className="font-medium text-sm p-2">
            <p>I've tried several online learning platforms, but none have been as engaging as this one. The Bootstrap course was a game-changer for me. The interactive assignments helped me grasp the concepts quickly.</p>
            <p className="text-right text-gray-300 mt-4"> John M</p>
            <p className="text-sm text-right text-gray-400">- Front-End Developer</p>
          </div>
        </div>
        <img src="https://i.postimg.cc/SKNkJ6LT/full-length-portrait-excited-happy-woman-pointing-fingers-both-ways-isolated-white.jpg" alt="" width="210" className="relative bottom-[295px] left-40 -z-10"/>  
        <div className="card ml-[15vw] -mt-[310px]">
          <div className="font-medium text-sm p-2">
            <p>This platform has been an invaluable resource for my career growth. The courses on HTML, CSS, and Bootstrap were in-depth and up-to-date with industry standards.</p>
            <p className="text-right text-gray-300 mt-4">Emily R</p>
            <p className="text-sm text-right text-gray-400">- UI/UX Designer</p>
          </div>
        </div>
    </div>
  );
}

export default Testimonials;
