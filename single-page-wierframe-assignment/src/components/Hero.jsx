function Hero() {
  return (
    <div className="flex justify-center items-center flex-col mt-4 p-4 bg-gradient-to-r from-cyan-500  vai-blue-500 to-purple-500 h-64">
        <h1 className="text-3xl text-white mt-4">Title</h1>
        <p className="text-white mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, molestias vero quidem sit non ipsum earum dolorem omnis labore perspiciatis.
        </p>
        <button className="border-2 border-none rounded-md bg-white px-2 py-1 text-gray-800 hover:bg-gray-500/55 hover:text-white p-2 mb-6 mt-6">
          Read More
        </button>
    </div>
  )
}

export default Hero;