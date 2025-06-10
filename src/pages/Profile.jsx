import React from "react";
import ExperienceCard from "../components/ExperienceCard"; // 导入 ExperienceCard 组件
import { Bar } from "@ant-design/plots";
import RotatingSunflower from "../components/rotatingSunflower";

const Profile = () => {
  const profileStyles = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const introSectionStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "60px",
    textAlign: "left",
  };

  const introTextStyles = {
    flexBasis: "50%",
    paddingLeft: "100px",
  };

  const helloIAmStyles = {
    fontSize: "20px",
    color: "#555",
    marginBottom: "5px",
  };

  const nameStyles = {
    fontSize: "80px",
    color: "#2E8B57", // SeaGreen, similar to the image's green
    fontStyle: "italic",
    margin: "0 0 10px 0",
    lineHeight: "1.1",
  };

  const iAmAStyles = {
    fontSize: "18px",
    color: "#555",
    marginBottom: "5px",
  };

  const roleStyles = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000",
    margin: "5px 0",
  };

  const sectionTitleStyles = {
    fontSize: "22px",
    color: "#777",
    textAlign: "left",
    marginBottom: "20px",
    fontWeight: "normal",
  };

  const experienceSectionStyles = {
    marginBottom: "60px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#fff",
  };

  const experienceCardsContainerStyles = {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-around",
  };

  const skillSetSectionStyles = {
    textAlign: "left",
    // 加一个圆弧形带阴影的边框
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#fff",
  };

  const config = {
    data: [
      { type: "JavaScript", value: 87 },
      { type: "HTML", value: 80 },
      { type: "CSS", value: 60 },
      { type: "React", value: 75 },
      { type: "Java", value: 65 },
      { type: "Oracle", value: 60 },
      { type: "AI Programming", value: 30 },
      { type: "English", value: 80 },
    ],
    xField: "type",
    yField: "value",
    colorField: "type",
    width: 850,
    height: 280,
    scale: {
      color: {
        range: ["#2E8B57", "#FF8C00", "#F8CC4D", "#83452D", "#F2F930"],
      },
    },
  };
  return (
    <div style={profileStyles}>
      {/* Intro Section */}

      <div style={introSectionStyles}>
        <RotatingSunflower height={320} rotateOnloading={true} type={3} />
        <div style={introTextStyles}>
          <p style={helloIAmStyles}>Hello! I am</p>
          <h1 style={nameStyles}>Doris</h1>
          <p style={iAmAStyles}>I am a</p>
          <p style={roleStyles}>Web Developer</p>
          <p style={roleStyles}>Full Stack Engineer</p>
        </div>
        <RotatingSunflower height={320} rotateOnloading={true} type={1} />
      </div>

      {/* My Working Experience Section */}
      <div style={experienceSectionStyles}>
        <h2 style={sectionTitleStyles}>My Working Experience</h2>
        <div style={experienceCardsContainerStyles}>
          <ExperienceCard
            companyName="Satyam"
            period="2008 - 2010"
            projectName="GE Employee Management System"
            role="Full Stack Developer"
            skills="JavaScript, HTML, CSS, Java, Oracle"
            projectDescription="Developed and maintained modules for GE's internal employee management portal, focusing on HR processes and data management."
          />
          <ExperienceCard
            companyName="WOYO.com"
            period="2010 - 2011"
            projectName="e-Commerce Website"
            role="Java Engineer"
            skills="Java, MogoDB, Oracle"
            projectDescription="Developed front-end interfaces and Java-based back-end APIs for an e-commerce platform.Ensured stable deployment and smooth operation of the project."
          />
          <ExperienceCard
            companyName="Citi Bank"
            period="2011 - 2024"
            role="Full Stack Developer"
            skills="JavaScript, CSS, HTML, Dojo, Java, Oracle"
            projectDescription={
              <div>
                <h3 style={{ marginBottom: "30px" }}>
                  Account Opening System for Citi Bank
                </h3>
                <div>
                  <div  style={{marginBottom:'10px'}}>
                    Contributed to the development of a streamlined digital
                    account opening system for 10+ countries, enhancing user
                    experience and reducing processing time.
                  </div>
                  <ul style={{ listStyleType: "disc"}}>
                    <li style={{marginBottom:'10px'}}>
                      Designed and implemented a global account opening system
                      for Citibank clients across 10+ countries, streamlining
                      secure and efficient account processing.
                    </li>
                    <li style={{marginBottom:'10px'}}>
                      Coordinated with cross-functional teams to integrate
                      interfaces and ensure data security.
                    </li>
                    <li style={{marginBottom:'10px'}}>
                      Developed customized solutions for international clients,
                      improving system adaptability and user satisfaction.
                    </li>
                  </ul>
                </div>
              </div>
            }
          />
        </div>
      </div>

      {/* My Skill Set Section */}
      <div style={skillSetSectionStyles}>
        <h2 style={sectionTitleStyles}>My Skill Set</h2>
        <Bar {...config} />
      </div>
    </div>
  );
};

export default Profile;
