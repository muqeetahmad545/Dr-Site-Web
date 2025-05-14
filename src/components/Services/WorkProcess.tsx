

const WorkProcess = () => {
  return (
    // <div className="flex justify-center bg-cover bg-no-repeat bg-center w-full relative">
    //     <div className='innerContainer z-30 mx-10'>
    //         <h1 data-aos="fade-left" className='text-4xl font-semibold mb-8 max-sm:text-3xl max-lg:text-center max-sm:text-center'>Our working process</h1>
    //         <div className='grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:px-10 gap-10 mb-40'>
    //             <div>
    //               <img src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497226/process1_hgthzf.png' alt='Image...' width={333} height={306} className='mb-6' />
    //                 <h2 className='mb-4 font-bold text-2xl'>Problem Identification</h2>
    //                 <p className='text-textcolor leading-10 max-sm:leading-7 text-base'>Our process begins with identifying the problem. We then tailor our flexible approach to address it, always ready for collaboration and learning. Our goal is to deliver top-quality products that exceed expectations.</p>
    //             </div>
    //             <div>
    //               <img src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497224/process2_znpkq4.png' alt='Image...' width={333} height={306} className='mb-6' />
    //                 <h2 className='mb-4 font-bold text-2xl'>Investigation</h2>
    //                 <p className='text-textcolor leading-10 max-sm:leading-7 text-base'>Investigation is a crucial part of our work process. We thoroughly examine issues to understand their root causes and implications. </p>
    //             </div>
    //             <div>
    //               <img src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497225/process4_kqlbb1.png' alt='Image...' width={333} height={306} className='mb-6' />
    //                 <h2 className='mb-4 font-bold text-2xl'>Strategy development</h2>
    //                 <p className='text-textcolor leading-10 max-sm:leading-7 text-base'>Strategy development is a vital aspect of our work process. We create strategic plans to address identified issues effectively. This involves open communication, continual learning, and the use of new technologies to ensure we deliver high-quality products. </p>
    //             </div>
    //             <div>
    //               <img src='https://res.cloudinary.com/dfizbmrep/image/upload/v1710497225/process3_xo4l9z.png' alt='Image...' width={333} height={306} className='mb-6' />
    //                 <h2 className='mb-4 font-bold text-2xl'>Results evaluation</h2>
    //                 <p className='text-textcolor leading-10 max-sm:leading-7 text-base'>Results evaluation is an integral part of our work process. We assess the outcomes of our strategies to ensure they meet or exceed expectations. This involves analyzing the effectiveness of our solutions and making necessary adjustments for continual improvement.</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div>
      <div className="flex justify-center bg-cover bg-no-repeat bg-center w-full relative">
        <div data-aos="fade-right" className="flex gap-8">
          <div className="">
            <h2 className="text-[32px] font-bold mb-4">
              Chosen For Excellence
            </h2>
            <div className="flex max-lg: max-sm:flex-col gap-5">
              <div>
                <div className="flex flex-col gap-7">
                  <p>- Ut wisi enim ad minim dolore</p>
                  <p>- Veniam quis laore nostrud</p>
                  <p>- Custom icons & illustrations</p>
                  <p>- Exerci tation ulm hedi corper</p>
                  <p>- Turet suscipit lobortis littera</p>
                </div>
                <span className="text-[#4AA7AD] ml-10 mt-3 cursor-pointer">
                  Learn more -- &gt;
                </span>
              </div>
              <div>
                <img
                  src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/h1-img-4.jpg"
                  alt="Image..."
                  width={333}
                  height={306}
                  className="mb-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <img
            src="https://res.cloudinary.com/dfizbmrep/image/upload/v1710497241/webillustartion_of6lvk.png"
            alt="image.."
            width={905}
            height={507}
            className="max-lg: max-sm:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
