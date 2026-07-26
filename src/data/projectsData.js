import automotive from "../assets/images/automotive.jpg";
import conveyor from "../assets/images/conveyor.jpg";
import spm from "../assets/images/spm.jpg";
import plc from "../assets/images/plc.webp";
import panel from "../assets/images/panel.jpg";
import robot from "../assets/images/robot.jpeg";

export const projects = [
  {
    id: 1,
    image: automotive,
    title: "Automotive Assembly Line Automation",
    category: "Industrial Automation",
    client: "Leading Automotive Manufacturer",
    year: "2024",
    technologies: ["Siemens PLC", "HMI", "Servo"],
  },
  {
    id: 2,
    image: conveyor,
    title: "Material Handling Conveyor System",
    category: "Conveyor Automation",
    client: "Manufacturing Industry",
    year: "2023",
    technologies: ["VFD", "PLC", "Sensors"],
  },
  {
    id: 3,
    image: spm,
    title: "Custom SPM Assembly Machine",
    category: "SPM Machine",
    client: "Automotive Supplier",
    year: "2024",
    technologies: ["Pneumatics", "Servo", "PLC"],
  },
  {
    id: 4,
    image: plc,
    title: "PLC & SCADA Modernization",
    category: "Industrial Automation",
    client: "Process Plant",
    year: "2023",
    technologies: ["SCADA", "Siemens", "Networking"],
  },
  {
    id: 5,
    image: panel,
    title: "MCC & PLC Control Panel",
    category: "Control Panel",
    client: "Engineering Company",
    year: "2024",
    technologies: ["IEC", "MCC", "PLC"],
  },
  {
    id: 6,
    image: robot,
    title: "Robotic Pick & Place Cell",
    category: "Robotics",
    client: "Electronics Industry",
    year: "2025",
    technologies: ["Robot", "Vision", "PLC"],
  },
];
