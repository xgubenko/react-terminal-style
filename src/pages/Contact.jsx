import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import TerminalInput from "../components/TerminalInput";
import Help from "../components/Help";
import ToPage from "../components/ToPage";

const Contact = () => {
  const [help, setHelp] = useState(false);
  return (
    <>
      <div className='noise'></div>
      <div className='overlay'></div>
      <div className='terminal'>
        <Header />
        <h1>Contacts</h1>
        <p className='output'>
          You can reach out to me using{" "}
          <a href='https://t.me/xgubenko'>telegram</a>: @xgubenko,
          <br />
          <a href='https://www.linkedin.com/in/gubenko/'>linkedin</a>, or try to{" "}
          <a href='mailto:rusf48@live.ru'>email</a> me.
        </p>

        <ToPage text='main' />
        {help && <Help />}
        <TerminalInput setHelp={setHelp} />
      </div>
    </>
  );
};

export default Contact;
