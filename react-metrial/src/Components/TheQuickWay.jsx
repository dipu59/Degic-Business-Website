import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function TheQuickWay() {
    const info = [
        {
            image:'The Quick Way/Save.png',
            heading:'Managment',
            paragraph:'Software platform for running your new internet business'
        },
        {
            image:'The Quick Way/Game.png',
            heading:'Entertainment',
            paragraph:'Software platform for running your new internet business'
        },
        {
            image:'The Quick Way/Camera.png',
            heading:'Marketing',
            paragraph:'Software platform for running your new internet business'
        },
        {
            image:'The Quick Way/Count.png',
            heading:'References',
            paragraph:'Software platform for running your new internet business'
        }
    ]
    return (
<section className="bg-gray-50">
<div className="flex flex-col md:flex-row max-w-[1400px] mx-auto gap-10 md:gap-24 py-12 md:py-20 px-14 md:px-7 items-center justify-between">
    {/* Left Sectio */}
<div className="md:grid grid-cols-1 sm:grid-cols-2 mx-auto w-full lg:w-1/2  justify-center items-center  lg:mx-10 cursor-pointer  hidden">
{info.map((card , index)=>(
        <div key={index}
        className="p-3 py-7 md:py-10 bg-white hover:shadow-lg hover:shadow-indigo-100 hover:bg-gray-100 hover:-translate-y-3 transition-all duration-300 rounded-xl  m-2"
        >
            <div className="flex justify-center items-center">
            <div className="bg-[#E2E2E2] p-3 rounded-full ">
                <img className="w-[60px]" src={card.image} />
            </div>
            </div>

            <div className="text-center w-full">
                <h1 className="text-center md:text-xl text-lg m-0 lg:m-2">{card.heading}</h1>
            <p className="w-full  lg:text-center text-sm md:text-base text-[#00000080] text-center block">{card.paragraph}</p>
            </div>
        </div>
              

    ))
}
</div>
    {/* Right Section */}
<div className="mx-auto  w-full lg:w-1/2">
    <h1 className="font-bold text-3xl md:text-5xl w-[270px] md:w-[400px] mb-2 text-left">The quickest way to create modern presentation</h1>
    <p className="text-[#00000080] my-2 text-sm lg:text-base text-left lg:my-6">Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>

    <div className='my-3 md:my-10'><button className="bg-[#5F62E226] text-[#5F62E2] px-4 py-2 md:px-5 md:py-3 rounded-lg hover:bg-[#5f61e244] active:translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100">Explore All <ArrowForwardIcon fontSize="small"/></button></div>

    <div className='mt-10 md:mt-18 hidden md:block'>
        <p className='text-[#00000080] text-sm md:text-base'>Follow Us</p>
        <div className='flex gap-3 mt-2 md:mt-3'>
            <a href="https://www.facebook.com/dipu.biswas.59" target='_blank'><img className='w-10 ' src="The Quick Way/Group 9 (1).png" /> </a>
            <a href="https://www.instagram.com/dipu20061?igsh=YzljYTk1ODg3Zg==" target='_blank'><img className='w-10 '  src="The Quick Way/Group 10 (1).png" /> </a>
            <a href="#" target='_blank'><img className='w-10 '  src="The Quick Way/Group 11 (1).png" /> </a>
        </div>
    </div>
</div>

{/* Responsive Design for sm device */}
<div className="md:hidden grid-cols-1 sm:grid-cols-2 mx-auto w-full lg:w-1/2  justify-center items-center  lg:mx-10 cursor-pointer  grid">
{info.map((card , index)=>(
        <div key={index}
        className="p-3 py-7 md:py-10 bg-white hover:shadow-lg hover:shadow-indigo-100 hover:bg-gray-100 hover:-translate-y-3 transition-all duration-300 rounded-xl  m-2"
        >
            <div className="flex justify-center items-center">
            <div className="bg-[#E2E2E2] p-3 rounded-full ">
                <img className="w-[60px]" src={card.image} />
            </div>
            </div>

            <div className="text-center w-full">
                <h1 className="text-center md:text-xl text-lg m-0 lg:m-2">{card.heading}</h1>
            <p className="w-full  lg:text-center text-sm md:text-base text-[#00000080] text-center block">{card.paragraph}</p>
            </div>
        </div>
              

    ))
}
</div>
{/* Responsive Design for Sm Device */}
<div className='  block md:hidden'>
        <p className='text-[#00000080] text-sm md:text-base text-center'>Follow Us</p>
        <div className='flex gap-3 mt-2 md:mt-3 '>
            <a href="https://www.facebook.com/dipu.biswas.59" target='_blank'><img className='w-10 ' src="The Quick Way/Group 9 (1).png" /> </a>
            <a href="https://www.instagram.com/dipu20061?igsh=YzljYTk1ODg3Zg==" target='_blank'><img className='w-10 '  src="The Quick Way/Group 10 (1).png" /> </a>
            <a href="#" target='_blank'><img className='w-10 '  src="The Quick Way/Group 11 (1).png" /> </a>
        </div>
</div>
    {/* End Responsive Design */}
</div>
</section>
    )
}

export default TheQuickWay;