import Logo from "../assets/Logo2.png";
function Footer() {
  return (
    <div className="bg-black">
        {/* child One */}
        <div className="flex justify-start space-x-4 px-5 py-8 md:px-6">
            <img src={Logo} alt="Tickete" />
        </div>
        {/* child Two */}
        <div className="flex flex-col-reverse md:flex-row justify-start mx-2 md:mx-0 gap-6 p-6 border-t-2 border-gray-600 ">
            <p className="text-gray-400">Made with &#x2764;</p>
            <ul className="flex flex-wrap justify-start gap-4 md:gap-7 md:list-disc text-gray-300">
                <li>Privacy policy</li>
                <li>Terms of usage</li>
                <li>Cancellation</li>
                <li>Sitemap</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer;