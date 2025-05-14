
const Card = () => {
    const data = [
        {
            title: "Originc",
            description: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing…",
            imagePath: "https://res.cloudinary.com/dfizbmrep/image/upload/v1710497226/screenplus_fjfxwu.png",
        },
        {
            title: "Natural",
            description: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing…",
            imagePath: "https://res.cloudinary.com/dfizbmrep/image/upload/v1710497216/customer_agm9xh.png",
        },
        
        {
            title:"Bioative",
            description: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing…",
            imagePath: "https://res.cloudinary.com/dfizbmrep/image/upload/v1710497226/screenplus_fjfxwu.png",
        },
    ];

    return (
        <div className="flex justify-center w-full">
            <div className='innerContainer relative'>
                <div>
                    <div data-aos="fade-right" className="text-center my-28 max-sm:mt-0 flex flex-col items-center">
                        {/* <span className='text-[#5bac52] pb-2 text-[22px]'>HOW CAN WE ADD VALUE</span> */}
                        <h2 className='font-bold text-5xl max-w-max pb-2 text-[#5bac52] border-b border-primary'>HOW CAN WE ADD VALUE</h2>
                    </div>
                    <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-12 mb-36 max-sm:mb-20'>
                        {data.map((item, index) => (
                            <div key={index} className='border-t-4 text-center border-[#5bac52] p-8 px-12'>
                                <div className='flex justify-center'>
                                    <img src={item.imagePath} alt='icon' width={78} height={64} />
                                </div>
                                <p className='text-lg font-bold py-5'>{item.title}</p>
                                <p className='leading-7' style={{ maxHeight: '180px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical' }}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                    {/* <div className='grid grid-cols-7 max-sm:grid-cols-1 justify-between gap-12 items-center mb-20 max-sm:px-10'>
                        <div className='col-span-3 max-sm:col-span-7'>
                            <div className='text-5xl font-bold flex gap-2 max-sm:text-3xl'>
                                <div><span className='text-primary'>Download</span> <span>Company</span> <span className='font-light'>Profile</span></div>
                            </div>
                            <p className='py-4 pr-10 text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <button className='p-2 px-5 border-2 border-primary text-primary font-semibold text-xl bg-white rounded-lg'>Contact us for a quotes</button>
                        </div>
                        <div className='col-span-4 max-sm:col-span-7 flex justify-center items-center relative cursor-pointer'>
                            <video poster='/poster.png' className='rounded-3xl w-full'>
                                <source src="your_video_source.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <Image src='/playIcon.png' alt='icon' width={108} height={108} className='absolute ' />
                        </div>
                    </div> */}
                    <div className='w-full flex max-lg:flex-col justify-center gap-8 py-40 mb-40 relative max-lg:px-10'>
                        <div data-aos="fade-right" className='p-10 px-16 rounded-xl bg-[#F4F4F4] w-[32%] max-xl:w-full z-10 max-sm:p-8'>
                            <h2 className='text-center font-semibold text-2xl pt-6 max-sm:text-xl'>Empowering Businesses with Innovative Software Solutions</h2>
                            <p className='py-10 max-sm:text-sm'>
                                Welcome to AccellionX, your partner for cutting-edge software solutions tailored to modern business needs. Our experienced team leverages the latest technologies to drive efficiency, productivity, and growth. From web and mobile app development to enterprise software solutions, we transform ideas into reality. Partner with us to stay ahead in today's competitive market.</p>
                            <button className='p-2 px-6 max-sm:text-sm bg-secondary text-white rounded-xl'>View More</button>
                        </div>
                        <div data-aos="fade-left" className='relative w-[32%] max-xl:w-full'>
                            <div className='p-10 px-16 bg-secondary rounded-xl text-white relative z-10 overflow-hidden max-sm:p-8'>
                                <div className='z-30'>
                                    <h2 className='text-center font-semibold text-2xl max-sm:text-xl pt-6'>Transforming Ideas into Digital Success Stories</h2>
                                    <p className='py-10 max-sm:text-sm'>
                                        At AccellionX, we drive digital success through innovation and collaboration. With user-centric design and scalable architectures, we exceed client expectations. Our services include software development, cloud solutions, and digital transformation consulting. Whether streamlining operations or launching a new product, we propel businesses forward. Partner with us and embark on a journey towards digital success.</p>
                                    <button className='p-2 px-6 bg-white max-sm:text-sm text-secondary rounded-xl'>View More</button>
                                </div>
                                <img src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497228/strings_p9o6yi.png' alt='icon' width={708} height={700} className='absolute -top-64 -right-20 z-20' />
                            </div>
                            <img src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497207/bellicon_qeppwi.png' alt='icon' width={120} height={120} className='absolute -top-16 right-0 z-20' />
                        </div>
                        <img src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497203/bubble_zopyks.png' alt='icon' width={450} height={450} className='absolute -bottom-0 right-20 z-0' />
                        <img src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497217/fadebubble_ffvbno.png' alt='icon' width={450} height={450} className='absolute max-sm:w-60 -top-14 left-10 z-0' />
                        <img src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497207/arrowsup_op6cpm.png' alt='icon' width={38} height={70} className='absolute -top-0 left-0 z-0' />
                        <img src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497207/arrowsup_op6cpm.png' alt='icon' width={38} height={70} className='absolute -bottom-14 right-0 z-0 rotate-180' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
