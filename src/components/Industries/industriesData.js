import automobile from "../../assets/images/automobile.webp";
import pharma from "../../assets/images/pharma.webp";
import textile from "../../assets/images/textile.webp";
import food from "../../assets/images/food.webp";
import packaging from "../../assets/images/packaging.webp";
import manufacturing from "../../assets/images/manufacturing.webp";

import {
  FaCar,
  FaCapsules,
  FaTshirt,
  FaUtensils,
  FaBoxOpen,
  FaIndustry,
} from "react-icons/fa";

export const industries = [
  {
    image: automobile,
    icon: FaCar,
    title: "Automobile Industry",
    description:
      "Automation systems for assembly lines, robotics and production optimization.",
  },
  {
    image: pharma,
    icon: FaCapsules,
    title: "Pharmaceutical",
    description:
      "Precision automation solutions for regulated pharmaceutical manufacturing.",
  },
  {
    image: textile,
    icon: FaTshirt,
    title: "Textile Industry",
    description:
      "High-speed automation for weaving, dyeing and textile processing plants.",
  },
  {
    image: food,
    icon: FaUtensils,
    title: "Food & Beverage",
    description:
      "Reliable process automation with hygiene and production efficiency.",
  },
  {
    image: packaging,
    icon: FaBoxOpen,
    title: "Packaging Industry",
    description:
      "Smart packaging machines with motion control and vision integration.",
  },
  {
    image: manufacturing,
    icon: FaIndustry,
    title: "General Manufacturing",
    description:
      "Complete turnkey automation for modern manufacturing industries.",
  },
];
