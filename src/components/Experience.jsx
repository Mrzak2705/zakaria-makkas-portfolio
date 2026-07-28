import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#132036", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #132036" }}
      date={experience.date}
      iconStyle={{ background: "#0B1220", border: "3px solid #E8935B" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Briefcase size={22} className="text-copper" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[20px] font-bold">{experience.title}</h3>
        <p className="text-teal text-[14px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <p className="mt-2 text-secondary text-[13px] leading-relaxed">
          {experience.intro}
        </p>
      </div>

      <ul className="mt-4 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[13px] pl-1 tracking-wide leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Professional Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
