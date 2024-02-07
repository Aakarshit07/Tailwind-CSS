import { BsInfoCircleFill } from "react-icons/bs";
function Heading() {
  return (
    <div className="flex flex-col justify-between gap-10 px-4 my-4 mx-3">
        {/* child one */}
        <div className="mb-3">
            <h2 className="font-bold text-4xl md:text-5xl font-serif">Confirm & pay</h2>
        </div>
        {/* child two */}
        <div className="flex justify-between border-2 border-netural-300 rounded-xl p-2 bg-neutral-100 mt-3">
            <div className="p-2">
                <h3 className="font-semibold">Free cancellation</h3>
                <p className="text-neutral-500">Tickets can be cancelled by 13th December, 2022.</p>
            </div>
            <div>
                <BsInfoCircleFill className="text-neutral-500"/>
            </div>
        </div>
    </div>

  )
}

export default Heading;