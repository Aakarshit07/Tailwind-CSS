import Logo from "../assets/Logo1.png";
import { MdArrowBack } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { LuHelpCircle } from "react-icons/lu";

function Header() {
  return (
    <div className="">
        {/* child one */}
        <div className="flex justify-between items-center space-x-4 p-4 mx-4">
            <div className="">
                <img className="hidden md:block" src={Logo} alt="" />
                <MdArrowBack className="md:hidden text-neutral-500 text-xl"/>
            </div>
            <div className="flex justify-between items-center gap-1 text-neutral-500 font-semibold">
                <IoMdLock />
                <p>
                    Checkout
                </p>
            </div>
            <div className="flex justify-between items-center gap-1 text-neutral-500 font-semibold">
                <LuHelpCircle />
                <p>Help</p>
            </div>
        </div>
        {/* child two */}
        <div className="flex items-center justify-center text-center bg-black p-3">
            <p className="text-white font-semibold">Holding your tickets for 30:00</p>
        </div>
    </div>
  )
}

export default Header