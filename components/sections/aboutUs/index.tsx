import React from 'react'

const AboutUs = () => {
  return (
    <div id='about' className='flex flex-col px-20 pt-28'>
      <h1 className="text-[4rem]">About Us.</h1>
      <div className='flex flex-col gap-10 border-2 border-white shadow-lg shadow-test-cyan/70 rounded-3xl p-10 text-[1.25rem]'>
        <div className='flex flex-col gap-10 bold'>
          <span className='font-semibold'>Welcome to Genomma Frontier</span>
          <p className='text-justify'>At Genomma Frontier, we're driven by a passion for innovation and a commitment to shaping the future of technology. Our mission is to create a vibrant ecosystem where visionaries, entrepreneurs, and experts collaborate to push the boundaries of what's possible.</p>
        </div>
        <div className='flex flex-col gap-10'>
          <span className='font-semibold'>Our Story</span>
          <p className='text-justify'>Genomma Frontier was founded on the belief that the most groundbreaking ideas emerge at the intersection of technology, creativity, and collaboration. Our name reflects our dedication to exploring the frontiers of innovation, where the latest advancements in genomics, artificial intelligence, and other cutting-edge fields converge.</p>
        </div>
        <div className='flex flex-col gap-10'>
          <span className='font-semibold'>Our Vision</span>
          <p className='text-justify'>We envision a world where technology empowers humanity to solve complex challenges, improve lives, and create a sustainable future. To achieve this, we're building a community of innovators, entrepreneurs, and thought leaders who share our vision and are committed to making a meaningful impact.</p>
        </div>
        <div className='flex flex-col gap-10'>
          <span className='font-semibold'>Our Values</span>
          <p className='text-justify'>
            •⁠  ⁠Innovation: We embrace experimentation, calculated risk-taking, and continuous learning.<br/>
            •⁠  ⁠Collaboration: We believe that diverse perspectives and expertise are essential to driving breakthroughs.<br/>
            •⁠  ⁠Inclusivity: We foster an environment where everyone feels valued, empowered, and supported.<br/>
            •⁠  ⁠Impact: We strive to create solutions that make a positive difference in the world.<br/>
          </p>
        </div>
        <div className='flex flex-col gap-10'>
          <span className='font-semibold'>Join Our Journey</span>
          <p className='text-justify'>If you're a fellow innovator, entrepreneur, or simply someone who shares our passion for shaping the future, we invite you to join our community. Together, let's explore the frontiers of technology and create a brighter tomorrow.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs