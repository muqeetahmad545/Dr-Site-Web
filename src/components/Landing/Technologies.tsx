'use client'
import  { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Technologies = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const images = [
        { src: 'https://res.cloudinary.com/dfizbmrep/image/upload/v1710497200/bootstrap_pxeix5.png', alt: 'Bootstrap', category: 'Web' },
        { src: 'https://res.cloudinary.com/dfizbmrep/image/upload/v1710497219/html_bo4omh.png', alt: 'HTML', category: 'Web' },
        { src: 'https://res.cloudinary.com/dfizbmrep/image/upload/v1710497220/js_xmveki.png', alt: 'JavaScript', category: 'Software' },
        { src: 'https://res.cloudinary.com/dfizbmrep/image/upload/v1710497221/php_wmhkdt.png', alt: 'PHP', category: 'Design' },
        { src: 'https://res.cloudinary.com/dfizbmrep/image/upload/v1710497221/laravel_whuh9b.png', alt: 'Laravel', category: 'Mobile' },
        { src: 'https://res.cloudinary.com/dfizbmrep/image/upload/v1710497241/wordpress_aexnu9.png', alt: 'WordPress', category: 'Web' },
        // Add more images with appropriate category
    ];

    const filteredImages = selectedCategory === 'All' ? images : images.filter(image => image.category === selectedCategory);

    const handleCategoryChange = (category:any) => {
        setSelectedCategory(category);
    };
    const responsive = {
        xl: {
            breakpoint: { max: 3000, min: 1301 },
            items: 6,
            slidesToSlide: 6 // optional, default to 1.
        },
        desktop: {
            breakpoint: { max: 1300, min: 801 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        }
    };
    return (
        <div className='bg-[#31979E] w-full flex justify-center'>
            <div className="innerContainer py-20 pt-36 !px-56 max-lg:!px-10">
                <div className='text-white flex flex-col gap-5 pb-5'>
                    <h1 className='text-3xl font-semibold'><span className='text-[#5bac52]'>Technologies</span> We Use</h1>
                    <p className='w-3/4 text-base max-lg:w-full'>To secure a majestic extent and accomplishment, we use up-to-date digital mechanisms and rigorously up-grade systems and manifesto used by our customers.</p>
                    <div className='flex justify-center text-sm'>LANGUAGES | FRAMEWORKS | DATABASE</div>
                </div>
                <div className='flex justify-center'>
                <div className='flex max-sm:grid max-sm:grid-cols-2 gap-4 items-center'>
    <button
        onClick={() => handleCategoryChange('Web')}
        className={`p-3 px-6 min-w-36 font-semibold ${selectedCategory === 'Web' ? 'bg-[#36A8B0] text-white' : 'bg-white text-black hover:bg-[#36A8B0] hover:text-white'}`}
    >
        Web
    </button>
    <button
        onClick={() => handleCategoryChange('Software')}
        className={`p-3 px-6 min-w-36 font-semibold ${selectedCategory === 'Software' ? 'bg-[#36A8B0] text-white' : 'bg-white text-black hover:bg-[#36A8B0] hover:text-white'}`}
    >
        Software
    </button>
    <button
        onClick={() => handleCategoryChange('Mobile')}
        className={`p-3 px-6 min-w-36 font-semibold ${selectedCategory === 'Mobile' ? 'bg-[#36A8B0] text-white' : 'bg-white text-black hover:bg-[#36A8B0] hover:text-white'}`}
    >
        Mobile
    </button>
    <button
        onClick={() => handleCategoryChange('Design')}
        className={`p-3 px-6 min-w-36 font-semibold ${selectedCategory === 'Design' ? 'bg-[#36A8B0] text-white' : 'bg-white text-black hover:bg-[#36A8B0] hover:text-white'}`}
    >
        Design
    </button>
</div>

                </div>
                <div className='my-10'>
                    <Carousel
                        showDots={true}
                        arrows={false}
                        responsive={responsive}
                        className='pb-14'
                    >
                        {filteredImages.map((image, index) => (
                            <div key={index} className='border-2 border-[#515151] mx-3 flex justify-center p-3 px-10'>
                                <img src={image.src} alt={image.alt} width={66} height={69} />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Technologies