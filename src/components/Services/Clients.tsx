import { COLORS } from '../../constants/theme'

const Clients = () => {
    return (
        
        <div style={{background:COLORS.gradientPrimary}} className="my-20 mb-32 flex justify-center bg-cover bg-no-repeat bg-center w-full relative bg-secondary">
            <div className='innerContainer py-20 z-30 relative'>
                <div className='py-20 flex max-lg:grid max-lg:grid-cols-2 max-sm:px-10 max-sm:flex-col max-lg:py-0 max-sm:py-0 max-lg:gap-10 max-sm:gap-10 justify-around text-white'>
                    <div className='flex flex-col items-center'>
                        <h1 data-aos="fade-down" className='text-[65px] font-semibold'>6</h1>
                        <p className='text-base'>Health Sections</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 data-aos="fade-down" className='text-[65px] font-semibold'>11</h1>
                        <p className='text-base'>Different Services</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 data-aos="fade-down" className='text-[65px] font-semibold'>388</h1>
                        <p className='text-base'>Blood Donations</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h1 data-aos="fade-down" className='text-[65px] font-semibold'>6000+</h1>
                        <p className='text-base'>Satisfied Patients</p>
                    </div>
                </div>
          <img data-aos="fade-up" src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497217/flowerpot_fsmsmu.png' alt='icon' width={112} height={112} className='absolute max-lg: max-sm:left-10 -bottom-14 left-40' />
          <img data-aos="fade-down" src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497207/bellicon_qeppwi.png' alt='icon' width={112} height={112} className='absolute max-lg: max-sm:right-10 -top-14 right-[30%]' />
          <img src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497205/ballon_z4u4im.png' alt='icon' width={319} height={125} className='absolute max-lg:hidden max-sm:hidden -top-36 right-20 rotate-[215deg]' />
          <img src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497205/ballon_z4u4im.png' alt='icon' width={319} height={125} className='absolute max-lg:hidden max-sm:hidden -top-32 left-6' />
            {/* <Image src='/ballon.png' alt='icon' width={319} height={125} className='absolute bottom-14 right-0' /> */}
            </div>
        </div>
    )
}

export default Clients