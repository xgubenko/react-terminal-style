import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import commandHistory from "../data/commandHistory";
import { getIdx, increaseIdx, reduceIdx, setIdx } from "../data/commandHistory";
import blogPosts from "../data/blogPosts";

const TerminalInput = ({ setHelp }) => {
  const [text, setText] = useState("");

  const commands = ["about", "projects", "contact", "blog", "help", "main"];
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

  const handleKeyDown = (e) => {
    const correct =
      commands.includes(text) || posts.includes(text) ? true : false;
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      changeCommand(e);
    } else if (e.key === "Enter") {
      addCommandToHistory(text);
      if (!correct || text === "help") setHelp(true);
      else {
        if (posts.includes(text)) navigate(text);
        else navigate("/" + text);
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
    <div className='input'>
      <div style={{ display: "inline-flex" }}>
        <input
          placeholder=''
          type='text'
          className='input'
          style={{
            outline: "none",
            background: "transparent",
            fontSize: "1.5rem",
            fontFamily: "Inconsolata",
            width: "30rem",
            borderColor: "rgba(192, 255, 192, 0.8)",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
          autoFocus
          onChange={(event) => handleInputChange(event)}
          onKeyDown={(e) => handleKeyDown(e)}
          value={text}
        ></input>
      </div>
    </div>
  );
};

export default TerminalInput;
