import { PiGlobeHemisphereWestFill } from "react-icons/pi";

function UserDetailsForm() {
    const baseInputFeildCSS = "border-2 border-neutral-300 rounded-lg p-2";
    return (
    <div className="m-7 py-6 border-b-2 border-neutral-300">
        {/* child one title */}
        
        <div>
            <h3 className="font-semibold text-lg md:text-2xl mb-3">Enter your details</h3>
            <p className=" text-neutral-400 my-4">We&apos;ll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
        </div>
        
        {/* child two form */}
        <div className="mt-6">
            <form>

                <div className={`${baseInputFeildCSS}`}> 
                    <input className="bg-transparent placeholder-neutral-500 " type="text" required placeholder="Full name"/>
                </div>

                <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 my-4"> 
                    <div className={`flex items-center ${baseInputFeildCSS} w-full md:w-1/2`}>
                        <PiGlobeHemisphereWestFill className="text-neutral-500" />
                        <select className="px-1 bg-transparent w-full outline-none text-neutral-500">
                            <option value="">Country code</option>
                            <option value="india">+91</option>
                            {/* //Todo: Map over the countary number */}
                        </select>
                    </div>

                    <input className={`${baseInputFeildCSS} w-full md:w-1/2 outline-none placeholder-neutral-500`} type="number" required placeholder="Phone number" maxLength={10}/>
                </div>

                <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 my-4">
                    <input className={`bg-transparent ${baseInputFeildCSS} w-full md:w-1/2 placeholder-neutral-500`} type="email" required placeholder="Email"/>
                    <input  className={`bg-transparent ${baseInputFeildCSS} w-full md:w-1/2 placeholder-neutral-500`} type="email" required placeholder="Confirm email"/>
                </div>

            </form>
        </div>
    </div>
  )
}

export default UserDetailsForm;