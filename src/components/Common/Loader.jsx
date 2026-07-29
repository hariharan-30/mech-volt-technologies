import { motion } from "framer-motion";
import logo from "../../assets/images/logo.webp";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#001B36]">
      <div className="text-center">
        {/* Logo */}

        <motion.img
          src={logo}
          alt="Mech Volt"
          className="w-28 mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        />

        {/* Company Name */}

        <motion.h1
          className="mt-6 text-4xl font-bold text-white tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
          }}
        >
          MECH VOLT
        </motion.h1>

        <motion.p
          className="text-orange-400 mt-3 tracking-[4px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.6,
          }}
        >
          Industrial Automation Solutions
        </motion.p>

        {/* Loading Bar */}

        <div className="mt-10 w-72 h-2 rounded-full bg-white/20 overflow-hidden">
          <motion.div
            className="h-full bg-orange-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
            }}
          />
        </div>

        <motion.p
          className="text-slate-300 mt-5"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
