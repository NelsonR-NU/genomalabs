import { FaCar, FaMobileAlt, FaGlobe } from 'react-icons/fa';
import CarouselCard from '@/assets/png/carousel-card.png'
import Image from 'next/image';

const CardSection = () => {
  return (
    <section className="relative py-20 bg-black">
      <div className='flex w-full justify-center text-center'>
        <h1 className='lg:text-[44px]'>
          Drive Innovation with Arm Technology
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-36 pt-10">
        <div className="hover:scale-110 hover:border-cyan-600  bg-[url('https://www.arm.com/-/media/global/homepage/Animated%20Cards/ai-brain-still-658x466-large-v1.jpg?rev=c4c6e2bd31a442a1b200a74211166fad&revision=c4c6e2bd-31a4-42a1-b200-a74211166fad')] hover:bg-[url('https://www.arm.com/-/media/global/homepage/Animated%20Cards/ai-brain-rotation.gif?rev=262d485ec30f4795b6db392a73352dbd&revision=262d485e-c30f-4795-b6db-392a73352dbd')] flex-1 p-8 hover:bg-test-cyan/20 hover:from-test-green/20 hover:via-test-green/10 hover:to-transparent hover:bg-black border-[1.5px] hover:border-[1.5px] hover:cursor-pointer rounded-xl transition-all duration-300 border-gray-500 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Lorem Ipsum</h2>
          <p className='pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur aliquam purus, eget consequat est euismod eu. </p>
          <a href="#" className="h-0 hidden hover:h-fit hover:visible relative bg-black border-[3px] border-test-cyan text-test-cyan px-6 py-3 rounded-full">Watch Our Story</a>
        </div>
        <div className="hover:scale-110 hover:border-test-cyan bg-[url('https://www.arm.com/-/media/global/homepage/Animated%20Cards/infrastructure-blue-cube-still-430x300-small-v2.jpg?rev=4fd06e149c88413d8290481d153ca2ed&revision=4fd06e14-9c88-413d-8290-481d153ca2ed')] hover:bg-[url('https://www.arm.com/-/media/global/homepage/Animated%20Cards/infrastructure-blue-cube-loop-457x296-short.gif?rev=917ffce32d9542559984f5f09439e065&revision=917ffce3-2d95-4255-9984-f5f09439e065')] flex-1 p-8 hover:bg-test-cyan/20 hover:from-test-green/20 hover:via-test-green/10 hover:to-transparent hover:bg-black border-[1.5px] hover:border-[1.5px] hover:cursor-pointer rounded-xl transition-all duration-300 border-gray-500 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Lorem Ipsum</h2>
          <p className='pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur aliquam purus, eget consequat est euismod eu. </p>
          <a href="#" className="h-0 hidden hover:h-fit hover:visible relative bg-black border-[3px] border-test-cyan text-test-cyan px-6 py-3 rounded-full">Watch Our Story</a>
        </div>
        <div className="hover:scale-110 hover:border-test-cyan bg-[url('https://www.arm.com/-/media/global/homepage/Animated%20Cards/auto-still-430x300-small-v2.jpg?rev=0f307905cf6b4e1dbc3450892981d621&revision=0f307905-cf6b-4e1d-bc34-50892981d621')] hover:bg-[url('https://www.arm.com/-/media/global/homepage/Animated%20Cards/auto-blue-cube-loop-457x296-short.gif?rev=3f89adf9706340639811f90ac8fe0984&revision=3f89adf9-7063-4063-9811-f90ac8fe0984')] flex-1 p-8 hover:bg-test-cyan/20 hover:from-test-green/20 hover:via-test-green/10 hover:to-transparent hover:bg-black border-[1.5px] hover:border-[1.5px] hover:cursor-pointer rounded-xl transition-all duration-300 border-gray-500 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Lorem Ipsum</h2>
          <p className='pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur aliquam purus, eget consequat est euismod eu. </p>
          <a href="#" className="h-0 hidden hover:h-fit hover:visible relative bg-black border-[3px] border-test-cyan text-test-cyan px-6 py-3 rounded-full">Watch Our Story</a>
        </div>
      </div>
    </section>
  );
}

export default CardSection