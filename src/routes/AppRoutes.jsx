// import { Routes, Route } from "react-router-dom";

// import Home from "../pages/Home";
// import About from "../pages/About";
// import Services from "../pages/Services";
// import Projects from "../pages/Projects";
// import Contact from "../pages/Contact";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/services" element={<Services />} />
//       <Route path="/projects" element={<Projects />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import Contact from "../pages/Contact";
import ServiceDetails from "../pages/ServiceDetails";
import Robotics from "../pages/Robotics";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/services/industrial-robotics" element={<Robotics />} />

      {/* Dynamic Project Details Route */}
      <Route path="/projects/:slug" element={<ProjectDetails />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
{
  /* <Route path="/robotics" element={<Robotics />} /> */
}
