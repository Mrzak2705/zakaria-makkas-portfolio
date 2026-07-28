import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Code2, Cpu, Landmark, ShieldCheck, Users } from "lucide-react";

import { styles } from "../styles";
import { positioning } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ICONS = {
  code: Code2,
  cpu: Cpu,
  landmark: Landmark,
  shield: ShieldCheck,
  users: Users,
};

const ServiceCard = ({ index, title, desc, icon }) => {
  const Icon = ICONS[icon];
  return (
    <Tilt className="xs:w-[260px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.3, 0.75)}
        className="w-full copper-teal-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 35, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-8 px-8 min-h-[220px] flex flex-col items-start gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <Icon size={22} className="text-copper" />
          </div>
          <h3 className="text-white text-[18px] font-bold">{title}</h3>
          <p className="text-secondary text-[13px] leading-relaxed">{desc}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-4 max-w-3xl">
        <p className="text-secondary text-[16px] leading-[28px]">
          I am a Software and AI Engineer with a Master's degree in Artificial
          Intelligence and Computer Engineering. I have nearly two years of
          experience in software development, application integration, testing
          and the maintenance of complex enterprise systems.
        </p>
        <p className="mt-4 text-secondary text-[16px] leading-[28px]">
          My technical background includes Java, Spring Boot, Angular, REST
          APIs, Python, SQL, Linux and artificial intelligence. I have also
          worked with Temenos Transact T24, batch processing, web services,
          reporting tools and production support.
        </p>
        <p className="mt-4 text-secondary text-[16px] leading-[28px]">
          Alongside development, I contribute to requirement analysis,
          functional and technical specifications, task planning, code review,
          testing and technical coordination. I also coordinate a small
          technical team by assigning tasks, monitoring progress, supporting
          team members and reporting project status to management.
        </p>
        <p className="mt-4 text-white-100 text-[16px] leading-[28px]">
          My objective is to build scalable software and AI solutions while
          progressing toward technical leadership and project management
          roles.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-wrap gap-8">
        {positioning.map((item, index) => (
          <ServiceCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
