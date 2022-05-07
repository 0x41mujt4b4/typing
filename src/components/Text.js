import React, { useRef, useEffect, useReducer } from "react";
// import Word from './Word'
import "./Text.css";
import "./style.css";
import Input from "./Input";
import { Howl } from "howler";
import keySound from "../assets/audio/1.mp3";

// const soundPlay = (src) => {
//   const sound = new Howl({ src });
//   sound.play();
// };

const Text = ({ wordsList }) => {
  console.log("text rendered");
  const textList = [...wordsList.join(" ")].map((letter, index) => (
    <div className={"inline text-gray-600 text-2xl"} key={index}>
      {letter}
    </div>
  ));
  const text = wordsList.join(" ");
  const sound = new Howl({
    src: [keySound],
  });
  const textReducer = (state, action) => {
    let inputText = [...action.input].map((letter, index) => {
      if (index < action.input.length && action.input[index] === text[index])
        return (
          <div className={"inline text-2xl text-neutral-300 "} key={index}>
            {letter}
          </div>
        );
      if (index < action.input.length && action.input[index] !== text[index]) {
        let space = text[index].includes(" ") ? (
          <div className={"inline text-2xl text-red-300 bg-red-400/20 rounded-sm"} key={index}>
            &nbsp;
          </div>
        ) : (
          <div className={"inline text-2xl text-red-300"} key={index}>
            {text[index]}
          </div>
        );
        return space;
      }
    });
    return {
      textList: [
        ...inputText,
        <div
          className={
            "inline text-gray-500 text-2xl border-b-2 border-gray-500"
          }
          key={action.input.length}
        >
          {text[action.input.length]}
        </div>,
        ...textList.slice(action.input.length + 1),
      ],
      input: action.input,
    };
  };
  const [textState, dispatchText] = useReducer(textReducer, {
    textList: textList,
    input: "",
  });
  const inputRef = useRef();
  const keyPressHandler = (event) => {
    dispatchText({ type: "keyPress", input: event.target.value });
    sound.play();
  };
  useEffect(() => {
    dispatchText({ type: "keyPress", input: "" });
  }, []);
  return (
    <div className="container mx-auto">
      <Input ref={inputRef} onChange={keyPressHandler} />
      <div
        className="container mx-auto px-80 py-36 tracking-wide cursor-default"
        onClick={() => inputRef.current.focus()}
      >
        {textState.textList}
      </div>
    </div>
  );
};

export default Text;