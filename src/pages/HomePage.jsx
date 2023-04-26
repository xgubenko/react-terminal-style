import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import TerminalInput from "../components/TerminalInput";
import Help from "../components/Help";

const Home = () => {
  const [help, setHelp] = useState(false);
  return (
    <>
      <div className='noise'></div>
      <div className='overlay'></div>
      <div className='terminal'>
        <Header />
        <p className='output'>
          Welcome to my personal page. Here you can find information{" "}
          <Link to='/about'>about</Link> me and my{" "}
          <Link to='/projects'>projects</Link>, try to{" "}
          <Link to='/contact'>contact</Link> me, or see my{" "}
          <Link to='/blog'>blog</Link>.
        </p>
        <p className='output'>You can start with "help" for more info.</p>
        <p className='output'>Good luck.</p>
        {/* {commands} */}
        {help && <Help />}
        <TerminalInput setHelp={setHelp} />
      </div>
    </>
  );
};

export default Home;
