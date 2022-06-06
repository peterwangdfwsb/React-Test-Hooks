import React from "react";

const Button = (props) => {
  // const handleClick = () => {
  //   console.log('hello world')
  // }

  return (
    <button className="test" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
