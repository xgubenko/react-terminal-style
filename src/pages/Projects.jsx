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
          <a
            href='https://github.com/xgubenko/react-terminal-style'
            target='_blank'
            rel='noreferrer'
          >
            react-terminal-style
          </a>
          . I learned some CSS and React tricks while creating this.
        </p>
        <p className='output'>
          A tool for mid-term trading:{" "}
          <a
            href='https://github.com/xgubenko/webhook-processor'
            target='_blank'
            rel='noreferrer'
          >
            webhook-processor
          </a>
          . Provides the ability to use TradingView webhooks to execute orders
          creation. I used it to trade futures on the Finam brokerage and a
          BTCUSD pair on Binance. I developed it with the intention of trading
          at higher frequency, but the actual delay was up to 5 seconds.
        </p>
        <ToPage text='main' />
        {help && <Help />}
        <TerminalInput setHelp={setHelp} />
      </div>
    </>
  );
};

export default Projects;
