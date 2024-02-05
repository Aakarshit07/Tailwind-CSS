import { data } from "../data.js"
function CssGrids() {
  const  boxStyle = "bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center"
  return (
    <div className="grid md:grid-cols-4 auto-rows-[300px] gap-4 my-10">
        {data.map((item) => (
            <div key={item.id} className={`${boxStyle} ${item.id === 0 || item.id === 4 || item.id === 5  || item.id === 6 ? "md:col-span-2" : ""} ${item.id == 2 ? "md:row-span-2" : ""}`}>
                <h1 className="text-xl text-gray-600">{item.name}</h1>
                <p className="font-bold font-2xl">{item.age}</p>
            </div>
        ))}
    </div>
  )
}

export default CssGrids