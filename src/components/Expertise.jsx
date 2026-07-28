import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { expertise } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Expertise = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Technical Expertise.</h2>
      </motion.div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertise.map((group, index) => (
          <motion.div
            key={group.group}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className="bg-tertiary rounded-2xl p-6 border border-white/5"
          >
            <h3 className="text-copper text-xs font-bold uppercase tracking-[0.15em] mb-4">
              {group.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-[12px] text-teal border border-teal/30 bg-teal/5 px-3 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Expertise, "expertise");
