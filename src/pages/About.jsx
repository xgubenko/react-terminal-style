import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import TerminalInput from "../components/TerminalInput";
import Help from "../components/Help";
import { Link } from "react-router-dom";
import ToPage from "../components/ToPage";

const About = () => {
  const [help, setHelp] = useState(false);
  return (
    <>
      <div className='noise'></div>
      <div className='overlay'></div>
      <div className='terminal'>
        <Header />
        <h1>About</h1>
        <p className='output'>
          Hi! My name is Aleksandr Gubenko.
          <br></br>&emsp;I am a software engineer working on web applications
          and web infrastructure. I have a bit off a diverse job history. I have
          had positions in help desk, test automation, web app development and
          sysadmin/devops.
          <br></br>&emsp;Here you can find out how to{" "}
          <Link to='/contact'>contact</Link> me. Feel free to ask questions and
          leave feedback.
          <br></br>&emsp;I can advise you as a backend/full stack developer if
          your project team needs help. I would also like to share knowledge
          about technologies, work and business processes.
        </p>
        <ToPage text='main' />
        {help && <Help />}
        <TerminalInput setHelp={setHelp} />
      </div>
    </>
  );
};

export default About;
