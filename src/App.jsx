import { BrowserRouter } from "react-router-dom";

import {
  About,
  Certifications,
  Contact,
  EducationSection,
  Experience,
  Expertise,
  Hero,
  Leadership,
  Navbar,
  StarsCanvas,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="grid-pattern">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Expertise />
        <Experience />
        <Works />
        <Leadership />
        <EducationSection />
        <Certifications />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
