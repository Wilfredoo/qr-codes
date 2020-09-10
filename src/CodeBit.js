import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function CodeBit({
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
       <pre className="codebit"> {codebits[number]}</pre>
      </header>
    </div>
  );
}

export default CodeBit;

const codebits = [
    `
    1.- git add .

    2.- git commit -m "fixed bug"

    3.- git push 
    `,
    `
    .parentContainer {

      display: flex;

    }
    

    .childContainers {

      justify-content: space-between;

    }


    (and that's how you use flex)

    `,
    `
    Two different ways to write a 
    function:

    
    function waterPlants() {

      console.log("Plants have been 

      watered")
    
    }

    const waterPlants = () => {
    
      console.log("Plants have been 
    
      watered")
    
    }
    `,

  `
    // When on desktop, show a big font. 
    // When on mobile, show a small font.


    .text {

      font-size: 20px
    
    }

    @media (max-width: 600px {
    
      .text {
    
        font-size: 12px
    
      }
    
    }
  
  `,
  `
  You found the puzzle of the week! 👑

  Solve it to get a free octocat sticker.

  Write a function that takes 
  a string and returns an array 
  with the words of that string
  
  Example:

  fromStringToArray(“I am Wild”) 
  
  //returns [“I”, “am”, “Wild"]
  `
];
