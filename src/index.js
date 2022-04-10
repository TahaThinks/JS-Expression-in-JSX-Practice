//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//-----------------------------------------------------------------------

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
const yourFirstName = "Taha";
const yourLastName = "Ahmed";
const currentYear = new Date().getFullYear();
ReactDOM.render(
  <div>
    <p>
      Created by {yourFirstName} {yourLastName}
    </p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
//------------------------------------------------------------------------
//E.g.
//Created by Angela Yu.
//Copyright 2019.
//ReactDOM.render(WHAT TO ENTER, WHERE TO PUT IT, CALLBACK IF SUCCESSFULL)
