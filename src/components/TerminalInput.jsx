import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import commandHistory from "../data/commandHistory";
import { getIdx, increaseIdx, reduceIdx, setIdx } from "../data/commandHistory";
import blogPosts from "../data/blogPosts";

const TerminalInput = ({ setHelp }) => {
  const [text, setText] = useState("");

  const commands = [
    //pages
    "help",
    "main",
    "about",
    "books",
    "projects",
    "contact",
    "blog",
    "main",
    //contacts
    "telegram",
    "linkedin",
    "email",
    //external sources
    "react-terminal-style",
    "webhook-processor",
  ];

  const externalPages = [
    "telegram::https://t.me/xgubenko",
    "linkedin::https://www.linkedin.com/in/gubenko/",
    "email::mailto:xgubenko@gmail.com",
    "react-terminal-style::https://github.com/xgubenko/react-terminal-style",
    "webhook-processor::https://github.com/xgubenko/webhook-processor",
  ];
  const posts = [];

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const getPrevCommandFromHistory = () => {
    setText("");

    if (getIdx() > 0) reduceIdx();
    const id = getIdx();
    if (id >= 0) {
      setText(commandHistory[id]);
    }
  };

  const getNextCommandFromHistory = () => {
    setText("");

    if (getIdx() < commandHistory.length - 1) increaseIdx();
    const id = getIdx();
    if (id <= commandHistory.length - 1) {
      setText(commandHistory[id]);
    }
  };

  const addCommandToHistory = (text) => {
    if (text.length > 0) {
      commandHistory.push(text);
      setIdx(commandHistory.length);
      setText("");
    }
  };

  const changeCommand = (e) => {
    if (e.key === "ArrowUp") {
      getPrevCommandFromHistory();
    }
    if (e.key === "ArrowDown") {
      setText("");
      getNextCommandFromHistory();
    }
  };

  const doAutoFocus = window.innerWidth > 500;

  const handleKeyDown = (e) => {
    const tempText = text.trim();
    const correct =
      commands.includes(tempText) || posts.includes(tempText) ? true : false;
    if (e.key === "ArrowUp" || e.key === "ArrowDown") changeCommand(e);
    else if (e.key === "Enter") {
      addCommandToHistory(tempText);
      if (!correct || tempText === "help") setHelp(true);
      else {
        const link = externalPages.find((x) => x.startsWith(tempText));
        if (link !== undefined) window.open(link.split("::")[1]);
        else if (posts.includes(tempText)) navigate(tempText);
        else navigate("/" + tempText);
      }
    }
  };

  const addBlogPosts = () => {
    blogPosts.map(({ slug }) => {
      posts.push(slug);
    });
  };

  useEffect(() => addBlogPosts(), [posts]);

  return (
    <>
      <div className='input'></div>
      {doAutoFocus ? (
        <input
          autoFocus
          placeholder=''
          type='text'
          className='input-text'
          onChange={(event) => handleInputChange(event)}
          onKeyDown={(e) => handleKeyDown(e)}
          value={text}
        ></input>
      ) : (
        <input
          placeholder=''
          type='text'
          className='input-text'
          onChange={(event) => handleInputChange(event)}
          onKeyDown={(e) => handleKeyDown(e)}
          value={text}
        ></input>
      )}
    </>
  );
};

export default TerminalInput;
