
import React from 'react';
import ReactDOM from 'react-dom';
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt it!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, {
        name: "Sudo",
        animal: "Dog",
        breed: "Wheaten Terrier",
      }),
    ] //array is optional as it would work with multiple params
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
