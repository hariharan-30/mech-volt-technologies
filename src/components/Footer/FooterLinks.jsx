import { FaChevronRight } from "react-icons/fa";

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-6">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li
            key={link}
            className="flex items-center gap-3 text-slate-300 hover:text-orange-400 cursor-pointer duration-300"
          >
            <FaChevronRight className="text-xs" />
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;