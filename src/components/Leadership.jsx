import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target } from "lucide-react";

import { styles } from "../styles";
import { leadership } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Leadership = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Beyond development</p>
        <h2 className={styles.sectionHeadText}>Technical Leadership.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[28px]"
      >
        {leadership.intro}
      </motion.p>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <motion.div variants={fadeIn("right", "spring", 0.2, 0.75)} className="bg-tertiary rounded-2xl p-7 border border-white/5">
          <div className="flex items-center gap-2 mb-5">
            <Target size={18} className="text-copper" />
            <h3 className="text-white font-bold text-[16px]">Responsibilities</h3>
          </div>
          <ul className="space-y-3">
            {leadership.responsibilities.map((r, i) => (
              <li key={i} className="flex gap-2 text-white-100 text-[13px] leading-relaxed">
                <CheckCircle2 size={14} className="text-teal mt-0.5 shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeIn("left", "spring", 0.3, 0.75)} className="bg-tertiary rounded-2xl p-7 border border-white/5 h-fit">
          <h3 className="text-white font-bold text-[16px] mb-5">Management Approach</h3>
          <div className="flex flex-wrap gap-2">
            {leadership.approach.map((a) => (
              <span
                key={a}
                className="text-[12px] text-copper border border-copper/30 bg-copper/5 px-3 py-1.5 rounded-full"
              >
                {a}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Leadership, "leadership");
