import RoboticsHero from "../components/RoboticsPage/RoboticsHero";
import RobotBrands from "../components/RoboticsPage/RobotBrands";
import RobotApplications from "../components/RoboticsPage/RobotApplications";
import RobotProgramming from "../components/RoboticsPage/RobotProgramming";
import RobotProcess from "../components/RoboticsPage/RobotProcess";
import RobotProjects from "../components/RoboticsPage/RobotProjects";
import SEO from "../components/SEO/SEO";

const Robotics = () => {
  return (
    <>
      <SEO
        title="Robotics Automation Solutions | Mech Volt Technologies"
        description="Discover our robotics automation solutions including robotic integration, industrial robots, automation systems, PLC communication and smart manufacturing technologies."
        keywords="Industrial Robotics, Robotics Integration, Robotic Automation, Smart Manufacturing, Industrial Robots, PLC Robotics, Factory Automation, Mech Volt Robotics"
      />
      <RoboticsHero />

      <RobotBrands />

      <RobotApplications />

      <RobotProgramming />

      <RobotProcess />

      {/* <RobotProjects /> */}
    </>
  );
};

export default Robotics;
