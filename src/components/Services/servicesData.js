// import automationImg from "../../assets/images/automation.avif";
// import plcImg from "../../assets/images/plc.webp";
// import spmImg from "../../assets/images/spm.webp";
// import panelImg from "../../assets/images/panel.webp";
// import turnkeyImg from "../../assets/images/pharma.webp";
// import maintenanceImg from "../../assets/images/manufacturing.webp";

// import {
//   FaRobot,
//   FaIndustry,
//   FaMicrochip,
//   FaBolt,
//   FaTools,
//   FaProjectDiagram,
// } from "react-icons/fa";

// export const services = [
//   {
//     id: 1,
//     slug: "spm-machine-design",

//     icon: FaIndustry,

//     image: spmImg,

//     category: "Machine Design",

//     title: "SPM Machine Design",

//     shortDescription:
//       "Custom Special Purpose Machines for industrial automation.",

//     description:
//       "Custom Special Purpose Machines designed according to production requirements.",

//     overview:
//       "We design and manufacture custom Special Purpose Machines (SPM) to automate repetitive manufacturing operations with high precision and reliability.",

//     features: [
//       "Custom Machine Design",
//       "3D Design",
//       "Production Automation",
//       "Servo Systems",
//       "Pneumatics",
//       "Machine Assembly",
//     ],

//     process: [
//       "Requirement Collection",
//       "Mechanical Design",
//       "Electrical Design",
//       "Manufacturing",
//       "Assembly",
//       "Trial & Delivery",
//     ],

//     benefits: [
//       "Higher Production",
//       "Reduced Labour",
//       "Consistent Quality",
//       "Lower Cost",
//       "Easy Maintenance",
//       "Long Life",
//     ],

//     technologies: [
//       "SolidWorks",
//       "AutoCAD",
//       "Servo Motors",
//       "Pneumatics",
//       "PLC",
//     ],

//     gallery: [spmImg, spmImg, spmImg],
//   },
//   {
//     id: 2,
//     slug: "industrial-automation",

//     icon: FaRobot,

//     image: automationImg,

//     category: "Automation",

//     title: "Industrial Automation",

//     shortDescription:
//       "Complete industrial automation solutions for modern manufacturing industries.",

//     description:
//       "Complete industrial automation solutions to improve productivity, efficiency and process reliability.",

//     overview:
//       "We provide complete industrial automation solutions including PLC programming, HMI development, SCADA integration, VFD control and machine automation to increase production efficiency while reducing downtime.",

//     features: [
//       "PLC Based Automation",
//       "Machine Automation",
//       "Production Line Automation",
//       "Process Automation",
//       "Industrial IoT Integration",
//       "Energy Optimization",
//     ],

//     process: [
//       "Requirement Analysis",
//       "System Design",
//       "PLC & HMI Programming",
//       "Panel Manufacturing",
//       "Installation & Testing",
//       "Commissioning & Support",
//     ],

//     benefits: [
//       "Higher Productivity",
//       "Reduced Downtime",
//       "Improved Accuracy",
//       "Energy Savings",
//       "Better Process Control",
//       "Lower Operating Cost",
//     ],

//     technologies: [
//       "Siemens PLC",
//       "Allen Bradley",
//       "Delta PLC",
//       "Mitsubishi PLC",
//       "VFD",
//       "Industrial Sensors",
//     ],

//     gallery: [automationImg, automationImg, automationImg],
//   },

//   {
//     id: 3,
//     slug: "plc-hmi-scada",

//     icon: FaMicrochip,

//     image: plcImg,

//     category: "Automation",

//     title: "PLC, HMI & SCADA",

//     shortDescription:
//       "Programming and integration of PLC, HMI and SCADA systems.",

//     description:
//       "Programming and integration of PLC, HMI, SCADA and Servo systems for smart manufacturing.",

//     overview:
//       "Professional PLC programming, HMI development and SCADA solutions for complete industrial process monitoring and automation.",

//     features: [
//       "PLC Programming",
//       "HMI Development",
//       "SCADA Integration",
//       "Servo Programming",
//       "Remote Monitoring",
//       "Data Logging",
//     ],

//     process: [
//       "Requirement Study",
//       "Control Logic Design",
//       "PLC Programming",
//       "HMI Development",
//       "SCADA Integration",
//       "Testing & Commissioning",
//     ],

//     benefits: [
//       "Real-Time Monitoring",
//       "Easy Operation",
//       "Fast Troubleshooting",
//       "Improved Productivity",
//       "Better Safety",
//       "Reduced Human Errors",
//     ],

//     technologies: [
//       "Siemens",
//       "Allen Bradley",
//       "Delta",
//       "WinCC",
//       "Wonderware",
//       "FactoryTalk",
//     ],

//     gallery: [plcImg, plcImg, plcImg],
//   },

//   {
//     id: 4,
//     slug: "control-panel-manufacturing",

//     icon: FaBolt,

//     image: panelImg,

//     category: "Electrical",

//     title: "Control Panel Manufacturing",

//     shortDescription:
//       "Industrial electrical control panel design and manufacturing.",

//     description:
//       "Design, fabrication, wiring and commissioning of industrial control panels.",

//     overview:
//       "We manufacture high-quality electrical control panels for industrial automation projects with complete testing and commissioning.",

//     features: [
//       "MCC Panels",
//       "PCC Panels",
//       "PLC Panels",
//       "Drive Panels",
//       "Power Distribution",
//       "Testing",
//     ],

//     process: [
//       "Design",
//       "Panel Fabrication",
//       "Component Mounting",
//       "Wiring",
//       "Testing",
//       "Commissioning",
//     ],

//     benefits: [
//       "Reliable Performance",
//       "Safe Operation",
//       "Easy Maintenance",
//       "Compact Design",
//       "High Quality",
//       "Long Service Life",
//     ],

//     technologies: ["AutoCAD Electrical", "Siemens", "Schneider", "ABB", "L&T"],

//     gallery: [panelImg, panelImg, panelImg],
//   },

//   {
//     id: 5,
//     slug: "turnkey-projects",

//     icon: FaProjectDiagram,

//     image: turnkeyImg,

//     category: "Engineering",

//     title: "Turnkey Projects",

//     shortDescription:
//       "Complete industrial project execution from design to commissioning.",

//     description:
//       "Complete project execution from concept, design and installation to commissioning.",

//     overview:
//       "We undertake complete turnkey industrial automation projects with end-to-end engineering support.",

//     features: [
//       "Design",
//       "Procurement",
//       "Installation",
//       "Commissioning",
//       "Documentation",
//       "Training",
//     ],

//     process: [
//       "Planning",
//       "Engineering",
//       "Procurement",
//       "Execution",
//       "Testing",
//       "Handover",
//     ],

//     benefits: [
//       "Single Point Responsibility",
//       "Faster Delivery",
//       "Better Quality",
//       "Lower Risk",
//       "Cost Effective",
//       "Technical Support",
//     ],

//     technologies: ["PLC", "SCADA", "Control Panels", "Industrial Networking"],

//     gallery: [turnkeyImg, turnkeyImg, turnkeyImg],
//   },

//   {
//     id: 6,
//     slug: "maintenance-amc",

//     icon: FaTools,

//     image: maintenanceImg,

//     category: "Support",

//     title: "Maintenance & AMC",

//     shortDescription:
//       "Preventive maintenance and Annual Maintenance Contracts.",

//     description:
//       "Preventive maintenance, breakdown support and Annual Maintenance Contracts.",

//     overview:
//       "Comprehensive maintenance services to keep your industrial systems running efficiently with minimum downtime.",

//     features: [
//       "Preventive Maintenance",
//       "Breakdown Support",
//       "AMC",
//       "Spare Parts",
//       "Health Check",
//       "Emergency Service",
//     ],

//     process: [
//       "Inspection",
//       "Diagnosis",
//       "Maintenance",
//       "Testing",
//       "Documentation",
//       "Support",
//     ],

//     benefits: [
//       "Minimum Downtime",
//       "Long Equipment Life",
//       "Reduced Repair Cost",
//       "Improved Safety",
//       "Quick Service",
//       "Reliable Operation",
//     ],

//     technologies: [
//       "PLC",
//       "Control Panels",
//       "Drives",
//       "Motors",
//       "Industrial Automation",
//     ],

//     gallery: [maintenanceImg, maintenanceImg, maintenanceImg],
//   },
// ];

import roboticsImg from "../../assets/images/robotics.webp";
import spmImg from "../../assets/images/spm.webp";
import jigFixtureImg from "../../assets/images/jigs-fixtures.webp";
import conveyorImg from "../../assets/images/conveyor-service.webp";
import gunsImg from "../../assets/images/guns.webp";
import plcImg from "../../assets/images/plc.webp";

import {
  FaRobot,
  FaIndustry,
  FaTools,
  FaExchangeAlt,
  FaWrench,
  FaMicrochip,
} from "react-icons/fa";

export const services = [
  // {
  //   id: 1,
  //   slug: "industrial-robotics-programming",
  //   icon: FaRobot,
  //   image: roboticsImg,
  //   category: "Robotics",
  //   title: "Industrial Robotics Programming Services",

  //   shortDescription:
  //     "Professional robot programming and integration for industrial automation.",

  //   description:
  //     "Robot programming, integration and commissioning services for industrial robotic applications.",

  //   overview:
  //     "We provide complete industrial robotics programming services including robot integration, commissioning, optimization and troubleshooting for manufacturing industries. Our solutions improve productivity, accuracy and process efficiency.",

  //   features: [
  //     "Robot Programming",
  //     "Robot Integration",
  //     "Robot Commissioning",
  //     "Cycle Time Optimization",
  //     "Robot Troubleshooting",
  //     "Technical Support",
  //   ],

  //   process: [
  //     "Requirement Analysis",
  //     "Robot Programming",
  //     "Simulation",
  //     "Integration",
  //     "Testing",
  //     "Commissioning",
  //   ],

  //   benefits: [
  //     "Higher Productivity",
  //     "Improved Accuracy",
  //     "Reduced Downtime",
  //     "Reliable Performance",
  //     "Better Quality",
  //     "Lower Operating Cost",
  //   ],

  //   technologies: [
  //     "ABB Robots",
  //     "Fanuc",
  //     "KUKA",
  //     "Yaskawa",
  //     "Universal Robots",
  //   ],

  //   gallery: [roboticsImg, roboticsImg, roboticsImg],
  // },

  {
    id: 1,
    slug: "spm-machine-design-industrial-automation",
    icon: FaIndustry,
    image: spmImg,
    category: "Machine Design",
    title: "SPM Machine Design & Industrial Automation",

    shortDescription:
      "Custom SPM machine design and industrial automation solutions.",

    description:
      "Design and manufacture of special purpose machines with automation.",

    overview:
      "We design and manufacture Special Purpose Machines (SPM) tailored to customer production requirements. Our automation solutions improve production speed, quality and efficiency.",

    features: [
      "Custom SPM Design",
      "Mechanical Design",
      "Automation Integration",
      "Servo Systems",
      "Pneumatic Systems",
      "Machine Manufacturing",
    ],

    process: [
      "Requirement Collection",
      "Design",
      "Manufacturing",
      "Assembly",
      "Testing",
      "Installation",
    ],

    benefits: [
      "Higher Production",
      "Reduced Manual Work",
      "Improved Quality",
      "Low Maintenance",
      "Reliable Operation",
      "Long Service Life",
    ],

    technologies: [
      "SolidWorks",
      "AutoCAD",
      "PLC",
      "Servo Motors",
      "Pneumatics",
    ],

    gallery: [spmImg, spmImg, spmImg],
  },

  {
    id: 2,
    slug: "jigs-and-fixtures",
    icon: FaTools,
    image: jigFixtureImg,
    category: "Manufacturing",
    title: "Jigs and Fixtures",

    shortDescription:
      "Custom jigs and fixtures for precision manufacturing industries.",

    description: "Design and manufacturing of industrial jigs and fixtures.",

    overview:
      "We manufacture precision jigs and fixtures for welding, machining and assembly applications to improve production quality and reduce setup time.",

    features: [
      "Welding Fixtures",
      "Assembly Fixtures",
      "Inspection Fixtures",
      "Machining Jigs",
      "Custom Fixtures",
      "Precision Manufacturing",
    ],

    process: [
      "Requirement Study",
      "Design",
      "Fabrication",
      "Assembly",
      "Quality Inspection",
      "Delivery",
    ],

    benefits: [
      "Improved Accuracy",
      "Reduced Setup Time",
      "Consistent Quality",
      "Higher Productivity",
      "Cost Effective",
      "Long Service Life",
    ],

    technologies: ["SolidWorks", "AutoCAD", "CNC Machining", "MIG Welding"],

    gallery: [jigFixtureImg, jigFixtureImg, jigFixtureImg],
  },

  {
    id: 3,
    slug: "industrial-conveyors",
    icon: FaExchangeAlt,
    image: conveyorImg,
    category: "Material Handling",
    title: "All Types of Conveyors",

    shortDescription:
      "Design, manufacture and installation of industrial conveyor systems.",

    description:
      "Complete conveyor solutions for industrial material handling.",

    overview:
      "We provide customized conveyor systems including belt, roller, chain and slat conveyors for efficient material handling across industries.",

    features: [
      "Belt Conveyors",
      "Roller Conveyors",
      "Chain Conveyors",
      "Slat Conveyors",
      "Custom Conveyors",
      "Installation",
    ],

    process: [
      "Site Inspection",
      "Design",
      "Manufacturing",
      "Installation",
      "Testing",
      "Support",
    ],

    benefits: [
      "Smooth Material Flow",
      "Reduced Labor",
      "Improved Productivity",
      "Safe Operation",
      "Easy Maintenance",
      "Reliable Performance",
    ],

    technologies: [
      "VFD",
      "Gear Motors",
      "Industrial Sensors",
      "PLC Integration",
    ],

    gallery: [conveyorImg, conveyorImg, conveyorImg],
  },

  {
    id: 4,
    slug: "industrial-guns-services",
    icon: FaWrench,
    image: gunsImg,
    category: "Industrial Service",
    title: "All Types of Paint Guns and Services",

    shortDescription: "Repair, servicing and maintenance of industrial guns.",

    description: "Complete industrial gun repair and maintenance services.",

    overview:
      "We provide installation, maintenance, repair and servicing for various industrial guns to ensure reliable performance and minimum production downtime.",

    features: [
      "Gun Repair",
      "Preventive Maintenance",
      "Calibration",
      "Spare Parts",
      "On-site Service",
      "Performance Testing",
    ],

    process: [
      "Inspection",
      "Diagnosis",
      "Repair",
      "Testing",
      "Calibration",
      "Delivery",
    ],

    benefits: [
      "Reduced Downtime",
      "Reliable Operation",
      "Long Equipment Life",
      "Quick Service",
      "Cost Effective",
      "Quality Support",
    ],

    technologies: ["Servo Guns", "Pneumatic Guns", "Industrial Equipment"],

    gallery: [gunsImg, gunsImg, gunsImg],
  },

  {
    id: 5,
    slug: "plc-programming-control-panel",
    icon: FaMicrochip,
    image: plcImg,
    category: "Automation",
    title: "PLC Programming & Control Panel Services",

    shortDescription:
      "PLC programming, HMI development and control panel manufacturing.",

    description:
      "Complete PLC programming and industrial control panel solutions.",

    overview:
      "We provide PLC programming, HMI development, control panel design, panel wiring, installation and commissioning for industrial automation systems.",

    features: [
      "PLC Programming",
      "HMI Development",
      "Control Panel Design",
      "Panel Wiring",
      "Panel Installation",
      "Commissioning",
    ],

    process: [
      "Requirement Analysis",
      "PLC Programming",
      "Panel Manufacturing",
      "Installation",
      "Testing",
      "Support",
    ],

    benefits: [
      "Reliable Automation",
      "Easy Operation",
      "Reduced Downtime",
      "Energy Efficient",
      "Improved Productivity",
      "Better Process Control",
    ],

    technologies: [
      "Siemens PLC",
      "Allen Bradley",
      "Delta PLC",
      "Schneider",
      "Mitsubishi PLC",
    ],

    gallery: [plcImg, plcImg, plcImg],
  },
];
