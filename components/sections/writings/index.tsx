"use client"

import { useState } from "react"

const Writings = () => {
  const [hover, setHover] = useState<any>("")

   const onMouseEnterVid = () => setHover("video")
   const onMouseEnterPost = () => setHover("post")
   const onMouseEnterAudio = () => setHover("audio")
   const onMouseLeave = () => setHover("")

  return (
    <div id="writings" className="flex flex-col scroll-mt-40 z-10 px-28 w-full  bg-gradient-to-b from-black/70 to-transparent">
      <h1 className="text-[4rem]">Writings.</h1>
      <div className="flex gap-10 pt-20">
        <div onMouseEnter={onMouseEnterVid} onMouseLeave={onMouseLeave} id="video" className="shadow-lg shadow-blue-500/50 hover:-translate-y-1 backdrop-blur-lg h-[400px] bg-cover bg-[url('/card1.png')] overflow-hidden hover:brightness-125 flex-1  border-[1.5px] hover:border-[1.5px] hover:cursor-pointer hover:border-gray-300 rounded-xl transition-all duration-300 ease-in-out border-gray-200 hover:shadow-lg shadow-gray-300 text-center">
          <div className="flex flex-grow flex-col justify-between h-full p-5">
            <span className={`${hover==='video' ? 'text-[2.5rem] text-center' : 'text-xl text-left'} transition-all duration-500 ease-in-out`}>
              Future Forward,<br/> Tech Powered
            </span>
            <div className="flex flex-col gap-3">
              <span className={`py-1 px-5 bg-test-red text-gray-200 rounded w-fit self-center tracking-[0.25rem] transition-all duration-500 ease-in-out ${hover==='video' ? 'visible h-fit' : 'hidden h-0'}`}>VIDEO</span>
              <a href="#" className="bg-black inset-x-0 bottom-0 border-[1.5px] border-test-cyan text-test-cyan px-10 py-3 rounded-full self-center">Learn More</a>
            </div>
          </div>
        </div>
        <div onMouseEnter={onMouseEnterPost} onMouseLeave={onMouseLeave} id="post" className="shadow-lg shadow-blue-500/50 hover:-translate-y-1 h-[400px] bg-cover bg-[url('/card2.png')] overflow-hidden hover:brightness-125 flex-1  border-[1.5px] hover:border-[1.5px] hover:cursor-pointer hover:border-gray-300 rounded-xl transition-all duration-300 ease-in-out border-gray-200 hover:shadow-lg shadow-gray-300 text-center">
          <div className="flex flex-grow flex-col justify-between h-full p-5">
            <span className={`${hover==='post' ? 'text-[2.5rem] text-center' : 'text-xl text-left'} transition-all duration-500 ease-in-out`}>
              Future Forward,<br/> Tech Powered
            </span>
            <div className="flex flex-col gap-3">
              <span className={`py-1 px-5 bg-test-cyan-0 text-gray-200 rounded w-fit self-center tracking-[0.25rem] transition-all duration-500 ease-in-out ${hover==='post' ? 'visible h-fit' : 'hidden h-0'}`}>POST</span>
              <a href="#" className="bg-black inset-x-0 bottom-0 border-[1.5px] border-test-cyan text-test-cyan px-10 py-3 rounded-full self-center">Learn More</a>
            </div>
          </div>
        </div>
        <div onMouseEnter={onMouseEnterAudio} onMouseLeave={onMouseLeave} id="audio" className="shadow-lg shadow-blue-500/50 hover:-translate-y-1 h-[400px] bg-cover bg-[url('/card3.png')] overflow-hidden hover:brightness-125 flex-1  border-[1.5px] hover:border-[1.5px] hover:cursor-pointer hover:border-gray-300 rounded-xl transition-all duration-300 ease-in-out border-gray-200 hover:shadow-lg shadow-gray-300 text-center">
          <div className="flex flex-grow flex-col justify-between h-full p-5">
            <span className={`${hover==='audio' ? 'text-[2.5rem] text-center' : 'text-xl text-left'} transition-all duration-500 ease-in-out`}>
              Future Forward,<br/> Tech Powered
            </span>
            <div className="flex flex-col gap-3">
              <span className={`py-1 px-5 bg-test-purple text-gray-200 rounded w-fit self-center tracking-[0.25rem] transition-all duration-500 ease-in-out  ${hover==='audio' ? 'visible h-fit' : 'hidden h-0'}`}>AUDIO</span>
              <a href="#" className="bg-black inset-x-0 bottom-0 border-[1.5px] border-test-cyan text-test-cyan px-10 py-3 rounded-full self-center">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Writings