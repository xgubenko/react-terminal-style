import React from "react";
import { Link } from "react-router-dom";

const ToPage = (props) => {
  return (
    <p className='output'>
      Return to <Link to={"/" + props.text}>{props.text}</Link>
    </p>
  );
};

export default ToPage;
