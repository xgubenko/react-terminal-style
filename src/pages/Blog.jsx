import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import TerminalInput from "../components/TerminalInput";
import Help from "../components/Help";
import ToPage from "../components/ToPage";
import blogPosts from "../data/blogPosts";

const Blog = () => {
  const [help, setHelp] = useState(false);
  return (
    <>
      <div className='noise'></div>
      <div className='overlay'></div>
      <div className='terminal'>
        <Header />
        <h1>Blog</h1>

        {blogPosts.map(({ slug, title }, index) => (
          <div key={index}>
            <Link to={slug}>{slug}</Link> {title}
          </div>
        ))}
        <ToPage text='main' />
        {help && <Help />}
        <TerminalInput setHelp={setHelp} />
      </div>
    </>
  );
};

export default Blog;
