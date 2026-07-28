import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Verified skills</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-6">
        {certifications.map((c, i) => (
          <motion.div
            key={i}
            variants={fadeIn("up", "spring", i * 0.2, 0.75)}
            className="bg-tertiary rounded-2xl p-6 border border-white/5 sm:w-[340px] w-full flex gap-4"
          >
            <Award size={22} className="text-copper shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-bold text-[15px] leading-snug">{c.title}</h3>
              <p className="text-secondary text-[13px] mt-1">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
