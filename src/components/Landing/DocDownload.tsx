
const DocDownload = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className="innerContainer py-36 relative">
                <div className='px-10'>
                    <h1 className='py-16 text-5xl max-sm:text-3xl text-center font-bold'>Document Download-Quotation Contact</h1>
                    <div className='flex gap-8 max-sm:flex-col'>
                        <div className='border-[5px] border-[#C9C9C9] p-10 w-full rounded-xl flex justify-between'>
                            <div>
                                <h1 className='text-5xl font-bold mb-2 max-sm:text-3xl'>Document</h1>
                                <p className='mb-8 text-textcolor text-lg max-sm:text-base'>See company introduction / case study /</p>
                                <button className='px-10 py-3 text-xl font-semibold max-sm:text-base rounded-full bg-secondary text-white'>Download</button>
                            </div>
                            <img src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497217/filedown_qwozqc.png' alt='icon' width={96} height={130} className='h-max max-sm:hidden' />
                        </div>
                        <div className='bg-secondary text-white p-10 w-full rounded-xl flex justify-between'>
                            <div>
                                <h1 className='text-5xl font-bold mb-2 max-sm:text-3xl'>Quotation</h1>
                                <p className='mb-8 text-lg max-sm:text-base'>Contact information</p>
                                <button className='px-10 py-3 text-xl font-semibold rounded-full bg-white max-sm:text-base text-black'>Send</button>
                            </div>
                            <img src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497222/plane_vyrtyx.png' alt='icon' width={96} height={130} className='h-max max-sm:hidden' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocDownload