import Image from 'next/image'
import BannerImg from '@/assets/png/banner.png'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image alt="" src={BannerImg} className='flex flex-grow z-1'/>
      <div className="flex justify-between gap-5 z-10 flex-1 text-center text-white absolute">
        <h1 className='flex text-[4rem] text-center'>Empowering the Next Generation <br/>of Innovators</h1>
        {/* <a href="#" className="bg-test-cyan text-black px-6 py-3 rounded-full">Discover Genomalabs</a>
        <a href="#" className="bg-black border-1 border-test-cyan text-test-cyan px-6 py-3 rounded-full">Watch Our Story</a> */}
      </div>
    </section>
  );
}

export default Hero