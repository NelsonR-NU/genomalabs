import Card from "@/components/card"

const Writings = () => {
  return (
    <div id="writings" className="flex flex-col -top-20 z-10">
      <h1 className="text-[4rem]">Writings</h1>
      <div className="flex gap-10">
        <Card/>
      </div>
    </div>
  )
}

export default Writings