"use client"

import Image from "next/image"
import { useState } from "react"
import PhoneIcon from "@/assets/svg/telefono.svg"
import DividerIcon from "@/assets/svg/divider.svg"
import AddressIcon from "@/assets/svg/address.svg"
import EmailIcon from "@/assets/svg/Vector.svg"

const ContactUs = () => {
  const [hovering, setHovering] = useState(false)

  return (
    <div id='contact' className='flex flex-col px-20 pt-20 gap-10'>
      <h1 className="text-[4rem]">Contact Us.</h1>
      <form onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="flex flex-col gap-20 bg-[url('/form-bg.png')] px-24 py-10 bg-cover w-full brightness-75 hover:brightness-100 transition-all ease-in-out duration-300">
        <div className='flex w-full gap-24'>
          <input type='text' placeholder='Name' className={`${true && 'brightness-150'} bg-transparent placeholder-white border-b-2  border-b-gray-200 text-gray-100 flex-1 outline-none`}/>
          <input type='text' placeholder='Email' className='bg-transparent placeholder-white border-b-2 border-b-gray-200 text-gray-100 flex-1  outline-none'/>
        </div>
        <input type='text' placeholder='Project name' className='bg-transparent placeholder-white border-b-2 border-b-gray-200 text-gray-100 focus:border-none  outline-none'/>
        <label className='flex flex-col'>
          <span>Project description</span>
          <textarea className='bg-transparent outline-none placeholder-white border-b-2 border-b-gray-200 text-gray-100 '/>
        </label>
        <select className='bg-black/20 outline-none placeholder-white border-b-2 border-b-gray-200'>
          <option selected className=' text-gray-100 font-bold'>Stage of your idea</option>
        </select>
        <a href="#" className="bg-black inset-x-0 bottom-0 border-[1.5px] border-test-cyan text-test-cyan px-16 py-3 rounded-full self-end shadow-lg shadow-blue-500/50">Send</a>
        <div className="flex justify-start items-center">
          <div className="flex gap-2">
            <Image alt="" src={PhoneIcon} />
            <span>5512345678</span>
          </div>
          <Image alt="" src={DividerIcon} />
          <div className="flex gap-2">
            <Image alt="" src={EmailIcon} />
            <span>genommalab@gl.com</span>
          </div>
          <Image alt="" src={DividerIcon} />
          <div className="flex gap-2">
            <Image alt="" src={AddressIcon} />
            <span>Escribe tu dirección aquí</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactUs