import robotHero from "../../assets/images/robotics-hero.webp";
import fanuc from "../../assets/images/fanuc.webp";
import abb from "../../assets/images/abb-robot.webp";
import kuka from "../../assets/images/kuka.webp";
import mitsubishi from "../../assets/images/mitsubishi-robot.webp";
import yaskawa from "../../assets/images/yaskawa.webp";

import {
  FaRobot,
  FaMicrochip,
  FaIndustry,
  FaCog,
  FaTools,
  FaCogs,
  FaProjectDiagram,
  FaCheckCircle,
} from "react-icons/fa";

export const roboticsData = {
  hero: {
    title: "Industrial Robotics Programming & Integration",

    subtitle: "SMART ROBOTIC AUTOMATION",

    description:
      "Mech Volt Technologies provides complete industrial robotics programming, robot integration, commissioning and production support for modern manufacturing industries.",

    image: robotHero,
  },

  stats: [
    {
      number: "13+",
      title: "Years Experience",
    },
    {
      number: "100+",
      title: "Robot Programs",
    },
    {
      number: "50+",
      title: "Commissioned Cells",
    },
    {
      number: "24/7",
      title: "Technical Support",
    },
  ],

  brands: [
    {
      name: "FANUC",
      image: fanuc,
    },
    {
      name: "ABB",
      image: abb,
    },
    {
      name: "KUKA",
      image: kuka,
    },
    {
      name: "Mitsubishi Electric",
      image: mitsubishi,
    },
    {
      name: "Yaskawa",
      image: yaskawa,
    },
  ],

  programming: [
    "FANUC TP Programming",
    "KAREL Programming",
    "ABB RAPID",
    "KUKA KRL",
    "Yaskawa INFORM",
    "MELFA Basic",
    "MotoPlus",
    "Robot Backup & Restore",
  ],

  integration: [
    "PLC Integration",
    "HMI Integration",
    "Machine Vision",
    "Industrial Ethernet",
    "Safety PLC",
    "Servo Systems",
    "Conveyor Synchronization",
    "I/O Mapping",
  ],

  commissioning: [
    "Robot Calibration",
    "Testing & Validation",
    "Cycle Time Optimization",
    "Performance Tuning",
    "Production Trial",
    "Troubleshooting",
    "Operator Training",
    "Documentation",
  ],

  support: [
    "Online Support",
    "Remote Assistance",
    "Onsite Commissioning",
    "Annual Maintenance",
    "Preventive Maintenance",
    "Emergency Breakdown Support",
  ],

  applications: [
    {
      icon: FaRobot,
      title: "Pick & Place Automation",
    },
    {
      icon: FaCog,
      title: "Machine Tending",
    },
    {
      icon: FaMicrochip,
      title: "Vision Inspection",
    },
    {
      icon: FaIndustry,
      title: "Material Handling",
    },
    {
      icon: FaTools,
      title: "Robotic Welding",
    },
    {
      icon: FaProjectDiagram,
      title: "Palletizing",
    },
    {
      icon: FaCogs,
      title: "Assembly Automation",
    },
    {
      icon: FaCheckCircle,
      title: "Packaging Automation",
    },
  ],

  industries: [
    "Automobile",
    "Pharmaceutical",
    "Food & Beverage",
    "Packaging",
    "Textile",
    "Electronics",
    "Machine Building",
    "General Manufacturing",
  ],

  process: [
    "Requirement Analysis",
    "Robot Selection",
    "Robot Programming",
    "PLC & HMI Integration",
    "Robot Commissioning",
    "Cycle Time Optimization",
    "Production Support",
  ],

  benefits: [
    "Higher Productivity",
    "Reduced Manual Labour",
    "Improved Repeatability",
    "Lower Production Cost",
    "24×7 Continuous Operation",
    "Enhanced Product Quality",
    "Reduced Downtime",
    "Safer Manufacturing Process",
  ],

  technologies: [
    "FANUC TP",
    "ABB RAPID",
    "KUKA KRL",
    "MELFA",
    "MotoPlus",
    "YRC",
    "PLC Integration",
    "Machine Vision",
    "Industrial Ethernet",
    "Safety PLC",
  ],

  faq: [
    {
      question: "Which robot brands do you support?",
      answer:
        "We provide programming and integration services for FANUC, ABB, KUKA, Mitsubishi Electric and Yaskawa industrial robots.",
    },
    {
      question: "Do you provide robot commissioning?",
      answer:
        "Yes. We handle complete installation support, commissioning, production trials and optimization.",
    },
    {
      question: "Can you integrate robots with PLC systems?",
      answer:
        "Yes. We integrate robots with Siemens, Mitsubishi, Allen Bradley, Delta and other PLC platforms.",
    },
    {
      question: "Do you provide onsite support?",
      answer:
        "Yes. We provide onsite commissioning, troubleshooting, preventive maintenance and AMC services.",
    },
  ],

  projects: [
    {
      title: "Robotic Welding Cell",

      industry: "Automobile",

      robot: "ABB IRB 1600",

      plc: "Siemens S7-1500",

      cycleTime: "18 sec",

      description:
        "Complete robotic welding automation with PLC synchronization and safety integration.",

      image: abb,

      results: [
        "40% Productivity Increase",
        "High Weld Quality",
        "Reduced Manual Labour",
      ],
    },

    {
      title: "Pick & Place Robot",

      industry: "Packaging",

      robot: "FANUC M-20iD",

      plc: "Allen Bradley",

      cycleTime: "12 sec",

      description:
        "High-speed robotic pick and place solution integrated with conveyor tracking.",

      image: abb,

      results: ["30% Faster Production", "99.8% Accuracy", "Lower Downtime"],
    },

    {
      title: "Machine Tending Robot",

      industry: "Manufacturing",

      robot: "KUKA KR 10",

      plc: "Siemens",

      cycleTime: "15 sec",

      description:
        "Automated CNC machine loading and unloading with vision-guided positioning.",

      image: abb,

      results: [
        "24/7 Operation",
        "Improved Safety",
        "Higher Machine Utilization",
      ],
    },
  ],
};
