import bgImage from '../assets/bg-img-2.jpg'; 
const Home = () => {
  return (
    <div className="p-8">
      <div>
        {/* <src img = './assets/bg-img-2.jpg'/> */}
                <img src={bgImage} alt="Clinic Background" className="w-full h-auto" />

      </div>

      <h1 className="text-4xl font-bold">Welcome to Our Clinic</h1>
      <p className="mt-4">Providing exceptional healthcare services to our community.</p>
    </div>
  );
};

export default Home;
