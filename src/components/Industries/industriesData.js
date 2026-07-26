import automobile from "../../assets/images/automobile.jpg";
import pharma from "../../assets/images/pharma.jpg";
import textile from "../../assets/images/textile.jpg";
import food from "../../assets/images/food.jpg";
import packaging from "../../assets/images/packaging.jpg";
import manufacturing from "../../assets/images/manufacturing.jpg";

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
  },
  {
    image: pharma,
    icon: FaCapsules,
    title: "Pharmaceutical Industry",
  },
  {
    image: textile,
    icon: FaTshirt,
    title: "Textile Industry",
  },
  {
    image: food,
    icon: FaUtensils,
    title: "Food & Beverage",
  },
  {
    image: packaging,
    icon: FaBoxOpen,
    title: "Packaging Industry",
  },
  {
    image: manufacturing,
    icon: FaIndustry,
    title: "General Manufacturing",
  },
];