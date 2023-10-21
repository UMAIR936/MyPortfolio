import React, { useCallback, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});

  const loadSharedData = useCallback(() => {
    fetch("portfolio_shared_data.json")
      .then((response) => response.json())
      .then((data) => {
        setSharedData(data);
        document.title = data.basic_info?.name;
      })
      .catch((err) => alert(err));
  }, []);

  const loadResumeFromPath = useCallback((path) => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => setResumeData(data))
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    loadSharedData();
    const resumePath = "res_primaryLanguage.json";
    loadResumeFromPath(resumePath);
  }, [loadSharedData, loadResumeFromPath]);

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
      <Projects
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Experience
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Footer sharedBasicInfo={sharedData.basic_info} />
    </div>
  );
};

export default App;
