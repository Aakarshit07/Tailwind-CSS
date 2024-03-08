function Card({ item }) {
  const {ImageUrl, Name, ShortDesc} = item
  console.log("CARD ITEMS",ImageUrl, Name, ShortDesc);
    
  return (
    <div className="border-2 w-80 h-84">
        <div>
            <img className="" src={ImageUrl} alt=""/>
        </div>
          <div className="text-left p-2 text-ellipsis text-wrap break-words overflow-hidden">
              <h3 className="text-md md:text-lg font-semibold">{Name}</h3>
              <p className="text-gray-700 text-ellipsis overflow-hidden line-clamp-4">{ShortDesc}</p>
              <button className="border-2 border-gray-400 p-1 rounded text-gray-800 hover:bg-gray-500 hover:text-white mt-2">View</button>
          </div>
    </div>
  )
}

export default Card;