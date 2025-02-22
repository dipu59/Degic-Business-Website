import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Blog() {
    const card =[
        {
            id: 1,
            img:"/Card/Group 41.png",
            heading: "Make myspace your best designed space",
            discription:"A lot of different components that will help you create the perfect look for your project",
            button:"Design",
        },
        {
            id: 2,
            img:"/Card/Group 40.png",
            heading: "My company culture has changed today",
            discription:"A lot of different components that will help you create the perfect look for your project",
            button:"3D illustrations",
        },
        {
            id: 3,
            img:"/Card/Group 39.png",
            heading: "Professionals in craft! All products were",
            discription:"A lot of different components that will help you create the perfect look for your project",
            button:"Development",
        }
    ]
    return (
        <section className='py-10 md:py-20'>
            <div className='px-6 md:px-24'>
                <h1 className="text-2xl md:text-5xl mb-3 font-semibold">Get more from our blog</h1>
                <div className='flex flex-col md:flex-row justify-between '>
                    <div>
                        <p className='w-sm md:text-lg text-[#00000080] mb-2'>
                        There are a lot of different components that will help you create the perfect look for your project
                        </p>
                    </div>
                    <div>
                    <button className="bg-[#5F62E226] text-[#5F62E2] hover:bg-[#5F62E2] hover:text-white px-4 py-2 md:px-5 md:py-3 rounded-lg cursor-pointer active:translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100">Learn more <ArrowForwardIcon fontSize="small"/></button>
                    </div>
                </div>
            </div>

            {/* Care start */}

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6  max-w-[1400px] mx-auto px-10 md:px-24'>
        {
            card.map((cards)=>(
                <div key={cards.id} >
                    <div className='bg-[#F7F7FA] mt-5 md:mt-10 hover:shadow-2xl rounded-2xl transition-all duration-300 hover:shadow-indigo-300 hover:-translate-y-5 cursor-pointer   hover:bg-indigo-50'>
                    <div><img src={cards.img}/></div>
                    <div className='px-3'>
                        <h1 className='text-2xl md:text-[28px] font-medium py-2 md:pb-3'>{cards.heading}</h1>
                        <p className='text-sm text-[#00000080] w-[270px]'>{cards.discription}</p>
                    </div>
                    <div className='px-3 mt-3 pb-6' >
                        <button className='text-sm bg-[#2AB6911C] text-[#2AB691] hover:bg-green-500 hover:text-green-100 px-4 py-2   rounded-lg cursor-pointer active:translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100'>{cards.button}</button>
                    </div>
                    </div>
                </div>
            ))
        }
</div>
        </section>
    )
}

export default Blog;