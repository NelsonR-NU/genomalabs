const Card = () => {
  return (
    <div className="hover:-translate-y-1 h-[400px] hover:brightness-150 bg-[url('https://www.arm.com/-/media/global/homepage/carousel/carousel-cards-bg1-550h.png?rev=f3e3a312858d4d66a2811ed72f0b3e2e&revision=f3e3a312-858d-4d66-a281-1ed72f0b3e2e')] flex-1 p-8  border-[1.5px] hover:border-[1.5px] hover:cursor-pointer hover:border-test-green rounded-xl transition-all duration-300 border-gray-500 shadow-lg text-center">
      <span className="text-xl hover:text-[2.5rem]">
        Future Forward,<br/> Tech Powered
      </span>
    </div>
  )
}

export default Card