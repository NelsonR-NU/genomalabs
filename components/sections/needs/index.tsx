import Image from "next/image"
import NeedsImg from "@/assets/png/needs.png"

const Needs = () => {
  return (
    <div id="needs" className="flex z-10 px-28 pt-28 w-full">
      <div className="flex flex-col gap-10">
        <h1 className="text-[4rem]">Needs.</h1>
        <p className="max-w-4xl text-[1rem] text-justify">
          To elevate this technology and innovation project to the next level, it is essential to secure key resources that will drive its development. We need funding for acquiring specialized tools and equipment, as well as implementing advanced technological infrastructure. Additionally, we seek collaborators and mentors with expertise in tech development, product design, and commercialization. Access to distribution networks, strategic partnerships, and marketing support are also crucial to ensuring the project's success and scalability. With your support, we can transform this innovative vision into a tangible reality.
        </p>
        <a href="#" className="bg-black shadow-lg shadow-blue-500/50 inset-x-0 bottom-0 border-[1.5px] border-test-cyan text-test-cyan px-6 py-3 rounded-full self-end">Add proposal</a>
      </div>
      <Image alt="needs" src={NeedsImg} className="opacity-90 -mt-16"/>
    </div>
  )
}

export default Needs