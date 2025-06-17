import Card from "../components/About/Cards";
import LandingAboutUs from "../components/About/LandingAboutUs";
import OurMission from "../components/About/OurMission";
import OurTeam from "../components/About/OurTeam";
import OurVision from "../components/About/OurVision";

const About = () => {
  return (
    <div className="p-8">
      <LandingAboutUs />
      <OurTeam />
      <Card />
      <OurVision />
      <OurMission />
    </div>
  );
};

export default About;
