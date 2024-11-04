import bannerImg from '../assets/banner.jpg';
const Banner = () => {
    return (
        <div className='border border-red-600'>
            <div className="container relative w-[95%] mx-auto border border-yellow-600 bg-gray-100 ">
                <div className="border-[7px] bg-[#9538E2] rounded-[32px] h-[600px] text-center">
                    <div className='mx-auto w-[80%]'>
                        <h1 className='text-white text-5xl font-bold mt-12 leading-normal mb-6'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className='text-sm font-normal mb-8 text-white w-[60%] mx-auto'>
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <div className='bg-white rounded-[32px] inline-block'>
                            <button className='rounded-[32px] bg-white text-xl font-bold text-[#9538E2] py-3.5 px-7 shadow-custom-inset'>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto h-[500px] w-[60%] overflow-hidden absolute bottom-[-220px] left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center border-[3px] border-red-600 rounded-[32px] p-6'>
                    <img className=' h-full w-full object-cover rounded-3xl' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;