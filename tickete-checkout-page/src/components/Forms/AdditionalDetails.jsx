function AdditionalDetails() {
    const baseInputFeildCSS = "border-2 border-neutral-300 rounded-lg p-2";
    return (
    <div className="m-7 py-6 border-b-2 border-neutral-300">
        {/* child one title */}
        
        <div>
            <h3 className="font-semibold text-lg md:text-2xl mb-3">Additional information</h3>
            <p className=" text-neutral-400 my-4">We need a few more details to complete your reservation.</p>
        </div>
        
        {/* child two form */}
        <div className="mt-6">
            <form>
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 my-4">
                    <input className={`${baseInputFeildCSS} w-full md:w-1/2 bg-transparent placeholder-neutral-500`} type="email" required placeholder="Email"/>
                    
                    <select className={`${baseInputFeildCSS} px-1 bg-transparent w-full md:w-1/2 outline-none text-neutral-500`}>
                        <option value="">Select</option>
                        <option value="1">Hello World</option>
                        <option value="2">Hello Planet</option>
                        {/* //Todo: Map over the List number */}
                    </select>
                </div>

                <div className={`${baseInputFeildCSS} `}> 
                    <select className="px-1 bg-transparent w-full outline-none text-neutral-500">
                        <option value="">Multi Select</option>
                        <option value="a10">Checkbox</option>
                        {/* //Todo: Map over the List number */}
                    </select>
                </div>

            </form>
        </div>
    </div>
  )
}

export default AdditionalDetails;