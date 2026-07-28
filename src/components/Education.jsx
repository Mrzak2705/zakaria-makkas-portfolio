import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import { styles } from "../styles";
import { education, currentFocus } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic background</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          {education.map((e, i) => (
            <motion.div
              key={i}
              variants={fadeIn("right", "spring", i * 0.2, 0.75)}
              className="flex gap-4 bg-tertiary rounded-2xl p-6 border border-white/5"
            >
              <GraduationCap size={22} className="text-copper shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold text-[15px] leading-snug">{e.degree}</h3>
                <p className="text-secondary text-[13px] mt-1">{e.school}</p>
                <p className="text-teal text-[12px] mt-1 font-medium">{e.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn("left", "spring", 0.2, 0.75)}>
          <span className="text-copper text-xs font-bold uppercase tracking-[0.15em] block mb-4">
            Currently working on
          </span>
          <div className="flex flex-wrap gap-2">
            {currentFocus.map((g) => (
              <span
                key={g}
                className="text-[12px] text-teal border border-teal/25 bg-teal/5 px-3 py-1.5 rounded-full"
              >
                {g}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
