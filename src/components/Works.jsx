import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, features, tags, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        options={{ max: 25, scale: 1, speed: 450 }}
        className="bg-tertiary p-6 rounded-2xl sm:w-[380px] w-full border border-white/5 h-full flex flex-col"
      >
        <div className="flex items-start justify-between mb-3">
          <span className="font-mono text-2xl text-copper opacity-70">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-primary w-9 h-9 rounded-full flex justify-center items-center cursor-pointer hover:bg-copper/20 transition"
          >
            <Github size={16} className="text-white" />
          </div>
        </div>

        <h3 className="text-white font-bold text-[19px]">{name}</h3>
        <p className="mt-2 text-secondary text-[13px] leading-relaxed">{description}</p>

        <div className="mt-4">
          <span className="text-copper text-[10px] uppercase tracking-[0.15em] font-semibold block mb-2">
            Key features
          </span>
          <ul className="grid grid-cols-1 gap-y-1">
            {features.slice(0, 5).map((f, i) => (
              <li key={i} className="text-white-100 text-[12px] flex gap-1.5">
                <ArrowUpRight size={12} className="text-teal mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag}`}
              className="text-[11px] text-teal border border-teal/25 bg-teal/5 px-2 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] max-w-3xl leading-[26px]"
        >
          A selection of full-stack and AI projects showing how I combine backend
          engineering, frontend development and machine learning to solve real
          business problems.
        </motion.p>
      </div>

      <div className="mt-16 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
