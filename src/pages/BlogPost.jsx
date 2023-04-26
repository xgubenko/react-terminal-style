import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import TerminalInput from "../components/TerminalInput";
import Help from "../components/Help";
import ToMain from "../components/ToPage";
import blogPosts from "../data/blogPosts";

const BlogPost = () => {
  const params = useParams();
  const post = blogPosts.find((post) => post.slug === params.slug);
  const [help, setHelp] = useState(false);
  const textItems = post.textArray.map((text) => {
    return (
      <>
        {text} <br></br>
      </>
    );
  });

  return (
    <>
      <div className='noise'></div>
      <div className='overlay'></div>
      <div className='terminal'>
        <Header />
        <h1>{post.title}</h1>

        <p className='output'>{textItems}</p>
        <ToMain text='blog' />
        {help && <Help />}
        <TerminalInput setHelp={setHelp} />
      </div>
    </>
  );
};

export default BlogPost;
