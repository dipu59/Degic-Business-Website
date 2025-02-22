import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function MoreTime() {
    return (
        <section className="bg-white max-w-[1500px]">
            {/* Section 1 */}
            <div className="flex flex-col-reverse md:flex-row py-10 md:py-24 px-10 md:px-24 justify-between items-center mx-auto">
                {/* Left Side */}
                <div>
                    <img src="/for work/Cake.png"/>
                </div>
                {/* Right side */}
                <div className='flex flex-col gap-4 '>
                    <h1 className="text-2xl md:text-5xl font-bold max-w-md">Make more time for the work</h1>
                    <p className='text-lg'><CheckCircleOutlineIcon className='text-[#2AB691] pb-2 '/><span>Simply explained with illustrations</span></p>
                    <p><CheckCircleOutlineIcon className='text-[#2AB691] pb-2'/><span>Make more time for the work</span></p>
                    <p><CheckCircleOutlineIcon className='text-[#2AB691] pb-2'/><span>Many ways to use illustrations in design</span></p>
                    <div className='my-3 md:my-8'><button className="bg-[#5F62E226] text-[#5F62E2] hover:bg-[#5F62E2] hover:text-white px-4 py-2 md:px-5 md:py-3 rounded-lg cursor-pointer active:translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100">Learn more <ArrowForwardIcon fontSize="small"/></button></div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col md:flex-row py-10 md:py-16  px-10 md:px-26 justify-between max-w-[1400px] items-center mx-auto">
                {/* Right side */}
                <div className='flex flex-col gap-4 '>
                    <h1 className="text-2xl md:text-5xl font-bold max-w-md">Make more time for the work</h1>
                    <p className='text-lg'><CheckCircleOutlineIcon className='text-[#2AB691] pb-2 '/><span>Many ways to use illustrations in design</span></p>
                    <p><CheckCircleOutlineIcon className='text-[#2AB691] pb-2'/><span>Simply explained with illustrations</span></p>
                    <p><CheckCircleOutlineIcon className='text-[#2AB691] pb-2'/><span>Make more time for the work</span></p>
                    <div className='my-3 md:my-8'><button className="bg-[#5F62E226] text-[#5F62E2] hover:bg-[#5F62E2] hover:text-white px-4 py-2 md:px-5 md:py-3 rounded-lg cursor-pointer active:translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100">Learn more <ArrowForwardIcon fontSize="small"/></button></div>
                </div>
                {/* Left Side */}
                <div>
                    <img src="/for work/Latumm.png"/>
                </div>
            </div>
        </section>
    )
}

export default MoreTime;