function Header() {
  return (
    <nav className="flex justify-between items-center bg-white border-b-2 border-gray-200 p-4" id="navbar">
        <div className="">
            <h3  className="text-2xl">Title</h3>
        </div>
        <div className="md:flex hidden justify-between items-center gap-4 text-lg">
          <p>Home</p>
          <p>About</p>
          <p>Blog</p>
          <p>Contact</p>
          <button className="border-2 border-blue-500 rounded px-2 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white p-1">Button</button>
        </div>
    </nav>
  )
}

export default Header;