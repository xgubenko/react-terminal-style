import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import TerminalInput from "../components/TerminalInput";
import Help from "../components/Help";
import ToPage from "../components/ToPage";

const Projects = () => {
  const [help, setHelp] = useState(false);
  return (
    <>
      <div className='noise'></div>
      <div className='overlay'></div>
      <div className='terminal'>
        <Header />
        <h1>Projects</h1>
        <p className='output'>
          This exact website:{" "}
          <Link to='https://github.com'>react-terminal-style</Link>. I
          definitely enjoyed learning CSS and React tricks while creating this.
        </p>
        <p className='output'>
          A tool for mid-term trading:{" "}
          <Link to='https://github.com'>webhook-processor</Link>. Provides an
          opportunity to use webhooks from TradingView for orders creation. I
          used it to trade futures on Finam broker and BTCUSD pair on Binance. I
          was creating it with intention to trade at higher frequency, but the
          real latency was up to 5 seconds.
        </p>
        <ToPage text='main' />
        {help && <Help />}
        <TerminalInput setHelp={setHelp} />
      </div>
    </>
  );
};

export default Projects;
