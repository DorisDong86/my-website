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
            projectDescription={
              <div style={{fontSize:"1rem"}}>
                <h3 style={{ marginBottom: "30px" }}>GE Employee Website</h3>
                <div style={{ marginBottom: "10px" }}>
                  Developed and maintained modules for GE's internal employee
                  management portal, focusing on HR processes and data
                  management.
                </div>
                <ul style={{ listStyleType: "disc" }}>
                  <li style={{ marginBottom: "10px" }}>
                    Received a client commendation letter for delivering
                    high-quality solutions that fully met their requirements.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Worked closely with clients to translate requirements into
                    technical solutions, improving user experience and
                    operational efficiency.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Collaborated with project teams to ensure high-quality
                    deliverables.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Maintained system stability through rigorous code reviews
                    and testing.
                  </li>
                </ul>
              </div>
            }
          />
          <ExperienceCard
            companyName="WOYO.com"
            period="2010 - 2011"
            projectName="e-Commerce Website"
            role="Web Developer"
            skills="JQuery, Javascript, HTML, CSS, Java, MogoDB, Oracle"
            projectDescription={
              <div style={{fontSize:"1rem"}}>
                <h3 style={{ marginBottom: "30px" }}>
                  WOYO e-Commerce Website
                </h3>
                <div>
                  <div style={{ marginBottom: "10px" }}>
                    Developed front-end interfaces and Java-based back-end APIs
                    for an e-commerce platform.Ensured stable deployment and
                    smooth operation of the project.
                  </div>
                  <ul style={{ listStyleType: "disc" }}>
                    <li style={{ marginBottom: "10px" }}>
                      Partnered with colleagues to achieve a successful project
                      go-live.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Built responsive frontend interfaces using jQuery, JS,
                      HTML and CSS, optimized backend APIs with Java, MogoDB to
                      ensure high performance.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Collaborated with teams to align frontend and backend
                      workflows, enhancing user experience.Conducted code
                      refactoring to improve system maintainability and
                      security.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Customized modules for BTC community features and
                      e-commerce requirements.
                    </li>
                  </ul>
                </div>
              </div>
            }
          />
          <ExperienceCard
            companyName="Citi Bank"
            period="2011 - 2024"
            role="Full Stack Developer"
            skills="JavaScript, CSS, HTML, Dojo, Java, Oracle"
            projectDescription={
              <div style={{fontSize:"1rem"}}>
                <h3 style={{ marginBottom: "30px" }}>
                  Account Opening System for Citi Bank
                </h3>
                <div>
                  <div style={{ marginBottom: "10px" }}>
                    Developed a global Account Opening System enabling Citibank
                    customers to open accounts one-stop,supporting over 20
                    countries.This system consolidated previously disparate
                    product-specific systems, allowing users to select multiple
                    products in a single session, significantly saving user
                    time.
                  </div>
                  <ul style={{ listStyleType: "disc" }}>
                    <li style={{ marginBottom: "10px" }}>
                      Implemented front-end UI components and interaction logic
                      for the account opening system using JavaScript, Dojo,
                      HTML, and CSS, focusing extensively on user experience
                      (UX) to deliver user-friendly interfaces.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Participated in feasibility discussions for new
                      requirements, conducted comprehensive impact analysis on
                      the overall product, and designed databases and APIs to
                      implement new functionalities.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Independently developed and maintained the Form module
                      using Java. This critical module demonstrated high
                      operational stability and was continuously optimized based
                      on client feedback, resulting in the solution being highly
                      commended by users.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Independently developed and maintained the AO Form module.
                      This critical module demonstrated high operational
                      stability and was continuously optimized based on client
                      feedback, resulting in the solution being highly commended
                      by users.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Collaborated effectively with colleagues from diverse
                      product departments and across different countries to
                      troubleshoot and resolve issues.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Participated in quarterly production releases,
                      demonstrating agility in rapidly diagnosing and resolving
                      incidents encountered during deployments.
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
