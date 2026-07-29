import project1 from "../../assets/images/project1.webp";
import project2 from "../../assets/images/project2.webp";
import project3 from "../../assets/images/project3.avif";

export const projects = [
  {
    id: 1,
    slug: "plc-conveyor-automation",

    image: project1,

    category: "Industrial Automation",

    title: "PLC Based Conveyor Automation System",

    shortDescription:
      "Complete PLC, HMI and VFD based conveyor automation for a manufacturing plant.",

    overview:
      "This project involved designing and implementing a fully automated conveyor system using Siemens PLC, HMI and ABB VFD to improve production efficiency.",

    client: "ABC Manufacturing",

    industry: "Automobile",

    location: "Chennai",

    duration: "3 Months",

    challenge:
      "The client was facing production delays due to manual material handling.",

    solution:
      "Implemented a PLC controlled conveyor system with HMI monitoring and VFD speed control.",

    technologies: ["Siemens PLC", "WinCC HMI", "ABB VFD", "Omron Sensors"],

    gallery: [project1, project1, project1],

    results: [
      "30% Productivity Increase",
      "20% Energy Saving",
      "Reduced Manual Work",
    ],
  },

  {
    id: 2,
    slug: "custom-spm-machine",

    image: project2,

    category: "SPM Machine",

    title: "Custom Special Purpose Machine",

    shortDescription: "Designed and manufactured an automated SPM machine.",

    overview:
      "Designed a customized Special Purpose Machine to automate repetitive manufacturing processes.",

    client: "XYZ Industries",

    industry: "Manufacturing",

    location: "Coimbatore",

    duration: "5 Months",

    challenge: "High production time and inconsistent quality.",

    solution: "Developed a custom SPM with automated feeding and inspection.",

    technologies: ["SolidWorks", "PLC", "Servo Motors", "Pneumatics"],

    gallery: [project2, project2, project2],

    results: ["40% Faster Production", "Reduced Labour", "Better Accuracy"],
  },

  {
    id: 3,
    slug: "control-panel-integration",

    image: project3,

    category: "Control Panel",

    title: "Industrial Control Panel Integration",

    shortDescription:
      "Electrical panel design, wiring, testing and commissioning.",

    overview:
      "Designed and commissioned industrial electrical control panels for automated machinery.",

    client: "DEF Engineering",

    industry: "Electrical",

    location: "Chennai",

    duration: "2 Months",

    challenge: "Old electrical panels caused frequent downtime.",

    solution:
      "Installed new control panels with improved safety and reliability.",

    technologies: [
      "AutoCAD Electrical",
      "MCC Panel",
      "PLC",
      "Protection Devices",
    ],

    gallery: [project3, project3, project3],

    results: ["Zero Downtime", "Improved Safety", "Easy Maintenance"],
  },
];
