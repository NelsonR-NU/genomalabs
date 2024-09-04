import Image from 'next/image';

const Features = () => {
  return (
    <section className="relative py-20 bg-black">
      <div className='flex w-full justify-center text-center'>
        <h1 className='lg:text-[44px]'>
          Building the Future of Computing on Arm.<br/>Together. For Everyone.
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-36 pt-10">
        <div className="hover:-translate-y-1 h-[400px] hover:brightness-150 bg-[url('https://www.arm.com/-/media/global/homepage/carousel/carousel-cards-bg1-550h.png?rev=f3e3a312858d4d66a2811ed72f0b3e2e&revision=f3e3a312-858d-4d66-a281-1ed72f0b3e2e')] flex-1 p-8  border-[1.5px] hover:border-[1.5px] hover:cursor-pointer hover:border-test-green rounded-xl transition-all duration-300 border-gray-500 shadow-lg text-center">
          <Image className="text-4xl mx-auto mb-4" alt="" src="https://www.arm.com/-/media/global/icons/homepage/arm-css-for-client-icon-147x40.svg" height={70} width={140}/>
          <h2 className="text-2xl font-bold mb-4">Lorem Ipsum</h2>
          <p className='pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur aliquam purus, eget consequat est euismod eu. </p>
          <a href="#" className="relative bg-black border-[3px] border-test-cyan text-test-cyan px-6 py-3 rounded-full">Watch Our Story</a>
        </div>
        <div className="hover:-translate-y-1 h-[400px] hover:brightness-150 bg-[url('https://www.arm.com/-/media/global/homepage/carousel/carousel-cards-bg1-550h.png?rev=f3e3a312858d4d66a2811ed72f0b3e2e&revision=f3e3a312-858d-4d66-a281-1ed72f0b3e2e')] p-8 border-[1.5px] hover:border-[1.5px] hover:cursor-pointer hover:border-test-green rounded-xl  transition-all duration-300 border-gray-500 shadow-lg text-center">
          <Image className="text-4xl mx-auto mb-4" alt="" src="https://www.arm.com/-/media/global/icons/homepage/arm-v9cpu-for-ai-mobile-and-beyond-icon-147x40.svg" height={70} width={140}/>
          <h2 className="text-2xl font-bold mb-4">Lorem Ipsum</h2>
          <p className='pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur aliquam purus, eget consequat est euismod eu. </p>
          <a href="#" className="relative bg-black border-[3px] border-test-cyan text-test-cyan px-6 py-3 rounded-full">Watch Our Story</a>
        </div>
        <div className="hover:-translate-y-1 h-[400px] hover:brightness-150 bg-[url('https://www.arm.com/-/media/global/homepage/carousel/carousel-cards-bg1-550h.png?rev=f3e3a312858d4d66a2811ed72f0b3e2e&revision=f3e3a312-858d-4d66-a281-1ed72f0b3e2e')] p-8 border-[1.5px] hover:border-[1.5px] hover:cursor-pointer hover:border-test-green rounded-xl  transition-all duration-300 border-gray-500 shadow-lg text-center">
          <Image className="text-4xl mx-auto mb-4" alt="" src="https://www.arm.com/-/media/global/icons/homepage/gaming-gpu-and-ai-innovation-icon-147x40.svg" height={70} width={140}/>
          <h2 className="text-2xl font-bold mb-4">Lorem Ipsum</h2>
          <p className='pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur aliquam purus, eget consequat est euismod eu. </p>
          <a href="#" className="relative bg-black border-[3px] border-test-cyan text-test-cyan px-6 py-3 rounded-full">Watch Our Story</a>
        </div>
      </div>
    </section>
  );
}

export default Features