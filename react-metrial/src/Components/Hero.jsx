
function Hero() {
    return (
        <>
        {/* Parent div */}
            <div className="  justify-around mx-auto md:flex mt-[30px] md:mt-[80px] bg-white  pb-[80px] md:pb-[100px] max-w-[1400px] ">
            {/* Simply Expliende With illustration */}
            <div className="gap-5 px-[70px] md:pl-[100px] pl-10  md:w-1/2 ">
                <h1 className=" text-3xl md:text-6xl font-bold">Simply explained with illustrations</h1>
                <p className="text-[#00000080] w-[350px] pt-3 md:pt-5 ">There are a lot of different components that will help you create the perfect look for your project</p>
                <div className="-ml-10 md:-ml-0">
                <button className=" bg-[#5f62e2] hover:bg-[#5a5bb1] transition-all duration-300 text-white font-medium px-2 md:px-4 py-2 md:py-3 rounded-lg ml-[40px] md:ml-0">Get Started</button>
                <button className=" m-3 md:mt-5 bg-[#5F62E226] hover:bg-green-500 hover:text-gray-100 transition-all duration-300 cursor-pointer  text-[#5F62E2] font-medium px-2 md:px-4 py-2 md:py-3 rounded-lg">Learn More</button>
                </div>
            </div>
            {/* Right Section */}
            <div className="md:w-1/2 flex md:block mx-auto justify-center">
                <img className=" w-[350px] md:w-[490px]" src="Nav&Hero/Rocket.png" alt="" />
            </div>
            </div>
        </>
    )
}

export default Hero