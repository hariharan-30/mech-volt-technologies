import automationImg from "../../assets/images/automation.avif";
import plcImg from "../../assets/images/plc.webp";
import spmImg from "../../assets/images/spm.webp";
import panelImg from "../../assets/images/panel.webp";
import turnkeyImg from "../../assets/images/pharma.webp";
import maintenanceImg from "../../assets/images/manufacturing.webp";

import {
  FaRobot,
  FaIndustry,
  FaMicrochip,
  FaBolt,
  FaTools,
  FaProjectDiagram,
} from "react-icons/fa";

export const services = [
  {
    id: 1,
    slug: "spm-machine-design",

    icon: FaIndustry,

    image: spmImg,

    category: "Machine Design",

    title: "SPM Machine Design",

    shortDescription:
      "Custom Special Purpose Machines for industrial automation.",

    description:
      "Custom Special Purpose Machines designed according to production requirements.",

    overview:
      "We design and manufacture custom Special Purpose Machines (SPM) to automate repetitive manufacturing operations with high precision and reliability.",

    features: [
      "Custom Machine Design",
      "3D Design",
      "Production Automation",
      "Servo Systems",
      "Pneumatics",
      "Machine Assembly",
    ],

    process: [
      "Requirement Collection",
      "Mechanical Design",
      "Electrical Design",
      "Manufacturing",
      "Assembly",
      "Trial & Delivery",
    ],

    benefits: [
      "Higher Production",
      "Reduced Labour",
      "Consistent Quality",
      "Lower Cost",
      "Easy Maintenance",
      "Long Life",
    ],

    technologies: [
      "SolidWorks",
      "AutoCAD",
      "Servo Motors",
      "Pneumatics",
      "PLC",
    ],

    gallery: [spmImg, spmImg, spmImg],
  },
  {
    id: 2,
    slug: "industrial-automation",

    icon: FaRobot,

    image: automationImg,

    category: "Automation",

    title: "Industrial Automation",

    shortDescription:
      "Complete industrial automation solutions for modern manufacturing industries.",

    description:
      "Complete industrial automation solutions to improve productivity, efficiency and process reliability.",

    overview:
      "We provide complete industrial automation solutions including PLC programming, HMI development, SCADA integration, VFD control and machine automation to increase production efficiency while reducing downtime.",

    features: [
      "PLC Based Automation",
      "Machine Automation",
      "Production Line Automation",
      "Process Automation",
      "Industrial IoT Integration",
      "Energy Optimization",
    ],

    process: [
      "Requirement Analysis",
      "System Design",
      "PLC & HMI Programming",
      "Panel Manufacturing",
      "Installation & Testing",
      "Commissioning & Support",
    ],

    benefits: [
      "Higher Productivity",
      "Reduced Downtime",
      "Improved Accuracy",
      "Energy Savings",
      "Better Process Control",
      "Lower Operating Cost",
    ],

    technologies: [
      "Siemens PLC",
      "Allen Bradley",
      "Delta PLC",
      "Mitsubishi PLC",
      "VFD",
      "Industrial Sensors",
    ],

    gallery: [automationImg, automationImg, automationImg],
  },

  {
    id: 3,
    slug: "plc-hmi-scada",

    icon: FaMicrochip,

    image: plcImg,

    category: "Automation",

    title: "PLC, HMI & SCADA",

    shortDescription:
      "Programming and integration of PLC, HMI and SCADA systems.",

    description:
      "Programming and integration of PLC, HMI, SCADA and Servo systems for smart manufacturing.",

    overview:
      "Professional PLC programming, HMI development and SCADA solutions for complete industrial process monitoring and automation.",

    features: [
      "PLC Programming",
      "HMI Development",
      "SCADA Integration",
      "Servo Programming",
      "Remote Monitoring",
      "Data Logging",
    ],

    process: [
      "Requirement Study",
      "Control Logic Design",
      "PLC Programming",
      "HMI Development",
      "SCADA Integration",
      "Testing & Commissioning",
    ],

    benefits: [
      "Real-Time Monitoring",
      "Easy Operation",
      "Fast Troubleshooting",
      "Improved Productivity",
      "Better Safety",
      "Reduced Human Errors",
    ],

    technologies: [
      "Siemens",
      "Allen Bradley",
      "Delta",
      "WinCC",
      "Wonderware",
      "FactoryTalk",
    ],

    gallery: [plcImg, plcImg, plcImg],
  },

  {
    id: 4,
    slug: "control-panel-manufacturing",

    icon: FaBolt,

    image: panelImg,

    category: "Electrical",

    title: "Control Panel Manufacturing",

    shortDescription:
      "Industrial electrical control panel design and manufacturing.",

    description:
      "Design, fabrication, wiring and commissioning of industrial control panels.",

    overview:
      "We manufacture high-quality electrical control panels for industrial automation projects with complete testing and commissioning.",

    features: [
      "MCC Panels",
      "PCC Panels",
      "PLC Panels",
      "Drive Panels",
      "Power Distribution",
      "Testing",
    ],

    process: [
      "Design",
      "Panel Fabrication",
      "Component Mounting",
      "Wiring",
      "Testing",
      "Commissioning",
    ],

    benefits: [
      "Reliable Performance",
      "Safe Operation",
      "Easy Maintenance",
      "Compact Design",
      "High Quality",
      "Long Service Life",
    ],

    technologies: ["AutoCAD Electrical", "Siemens", "Schneider", "ABB", "L&T"],

    gallery: [panelImg, panelImg, panelImg],
  },

  {
    id: 5,
    slug: "turnkey-projects",

    icon: FaProjectDiagram,

    image: turnkeyImg,

    category: "Engineering",

    title: "Turnkey Projects",

    shortDescription:
      "Complete industrial project execution from design to commissioning.",

    description:
      "Complete project execution from concept, design and installation to commissioning.",

    overview:
      "We undertake complete turnkey industrial automation projects with end-to-end engineering support.",

    features: [
      "Design",
      "Procurement",
      "Installation",
      "Commissioning",
      "Documentation",
      "Training",
    ],

    process: [
      "Planning",
      "Engineering",
      "Procurement",
      "Execution",
      "Testing",
      "Handover",
    ],

    benefits: [
      "Single Point Responsibility",
      "Faster Delivery",
      "Better Quality",
      "Lower Risk",
      "Cost Effective",
      "Technical Support",
    ],

    technologies: ["PLC", "SCADA", "Control Panels", "Industrial Networking"],

    gallery: [turnkeyImg, turnkeyImg, turnkeyImg],
  },

  {
    id: 6,
    slug: "maintenance-amc",

    icon: FaTools,

    image: maintenanceImg,

    category: "Support",

    title: "Maintenance & AMC",

    shortDescription:
      "Preventive maintenance and Annual Maintenance Contracts.",

    description:
      "Preventive maintenance, breakdown support and Annual Maintenance Contracts.",

    overview:
      "Comprehensive maintenance services to keep your industrial systems running efficiently with minimum downtime.",

    features: [
      "Preventive Maintenance",
      "Breakdown Support",
      "AMC",
      "Spare Parts",
      "Health Check",
      "Emergency Service",
    ],

    process: [
      "Inspection",
      "Diagnosis",
      "Maintenance",
      "Testing",
      "Documentation",
      "Support",
    ],

    benefits: [
      "Minimum Downtime",
      "Long Equipment Life",
      "Reduced Repair Cost",
      "Improved Safety",
      "Quick Service",
      "Reliable Operation",
    ],

    technologies: [
      "PLC",
      "Control Panels",
      "Drives",
      "Motors",
      "Industrial Automation",
    ],

    gallery: [maintenanceImg, maintenanceImg, maintenanceImg],
  },
];
