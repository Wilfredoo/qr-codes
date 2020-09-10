import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Message({
  match: {
    params: { number },
  },
}) {
  return (
    <div>
      <header className="App-header">
        <img
          src={
            "https://shetechitaly.org/wp-content/uploads/2019/10/LOGOS_WCS_Plan-de-travail-1.png"
          }
          className="App-logo"
          alt="logo"
        />
       <p className="message"> {messages[number]}</p>
      </header>
    </div>
  );
}

export default Message;

const messages = [
  "Berlly is the official mascot of the Berlin Campus",
  "Cosmin lived in 8 countries for at least 3 months at a time",
  "A user interface is like a joke, if you have to explain it, it's not that good",
  "Remember to put all you sensitive information in a .gitignore file!",
  "5 commands to remember: mkdir, touch, ls, cd, cp"
];
