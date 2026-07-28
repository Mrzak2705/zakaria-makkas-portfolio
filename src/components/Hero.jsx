import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-copper" />
          <div className="w-1 sm:h-64 h-32 copper-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-copper">Zakaria Makkas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software &amp; AI Engineer
          </p>
          <p className="mt-3 text-teal font-medium text-[15px] sm:text-[17px] tracking-wide max-w-xl">
            Full-Stack Java &amp; Angular · AI Integration · Core Banking
            <br className="sm:block hidden" />
            Quality Engineering · Technical Coordination
          </p>
          <p className="mt-4 text-secondary text-[15px] sm:text-[16px] max-w-xl leading-relaxed">
            I design and develop full-stack applications using Java, Spring Boot
            and Angular. I also work on AI integration, enterprise systems,
            software testing and technical team coordination.
          </p>

          <p className="mt-6 text-secondary text-xs">
            Based in Casablanca, Morocco — Open to Software, AI and Technical Coordination opportunities
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
