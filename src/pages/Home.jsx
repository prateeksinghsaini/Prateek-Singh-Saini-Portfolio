import { motion } from "framer-motion";
import Personal from "../components/Personal";

function Home() {
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      className="container grid grid-cols-4 gap-3"
    >
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="container grid grid-cols-5 gap-3 col-span-4 lg:col-span-3"
      >
        <motion.li
          variants={item}
          className="relative overflow-hidden item h-96 bg-[#fff4] rounded-3xl col-span-5 row-span-1 lg:col-span-3"
        >
          <Personal />
        </motion.li>
        <motion.li
          variants={item}
          className="overflow-hidden item h-96 bg-[#fff4] rounded-3xl col-span-5 lg:col-span-2"
        ></motion.li>
        <motion.li
          variants={item}
          className="overflow-hidden item h-56 bg-[#fff4] rounded-3xl col-span-5 lg:col-span-2"
        ></motion.li>
        <motion.li
          variants={item}
          className="overflow-hidden item h-50 bg-[#fff4] rounded-3xl col-span-5 lg:col-span-3"
        ></motion.li>
      </motion.ul>
      <motion.li
        variants={item}
        className="overflow-hidden item bg-[#fff4] rounded-3xl col-span-4 lg:col-span-1"
      ></motion.li>
    </motion.ul>
  );
}

export default Home;
