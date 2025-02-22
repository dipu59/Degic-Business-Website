
function Boom() {
    return (
        <section className="bg-[#5F62E2]">
            <div className="flex flex-col md:flex-row pt-10 md:py-0  mx-auto items-center justify-center w-full max-w-[1400px] ">
                {/* Text Side */}
                <div className="md:w-1/2 w-full pl-10 md:pl-30"> 
                    <h1 className="text-xl md:text-5xl md:w-lg text-white ">The quick way to create awesome presentation</h1>
                    <div className="mt-2 md:mt-10">
                <button className=" mr-2 mb-1 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-medium px-2 md:px-4 py-2 md:py-3 rounded-lg  ">Get Started</button>
                <button className=" bg-[#7677df] hover:bg-[#8789f8] hover:text-gray-100 transition-all duration-300 cursor-pointer  text-white font-medium px-2 md:px-4 py-2 md:py-3 rounded-lg">Learn More</button>
                </div>
                </div>
                {/* Image Side */}
                <div className="w-1/2 md:w-1/2 ">
                    <img className="w-[300px] md:w-[424px] " src="/for work/bomb 1 (1).png"  />
                </div>
            </div>
        </section>
    )
}

export default Boom