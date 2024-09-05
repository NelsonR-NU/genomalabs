
const Card = ({ image }: any) => {
  return (
    <div className="hover:-translate-y-1 h-[400px] bg-cover bg-[url('/card1.png')] overflow-hidden hover:brightness-150 flex-1  border-[1.5px] hover:border-[1.5px] hover:cursor-pointer hover:border-test-green rounded-xl transition-all duration-300 ease-in-out border-gray-500 shadow-lg text-center">
      <div className="flex flex-grow flex-col justify-center h-full">
        <span className="text-xl hover:text-[2.5rem]">
          Future Forward,<br/> Tech Powered
        </span>
        <a href="#" className="bg-black inset-x-0 bottom-0 border-[1.5px] border-test-cyan text-test-cyan px-6 py-3 rounded-full self-center">Learn More</a>
      </div>
    </div>
  )
}

export default Card