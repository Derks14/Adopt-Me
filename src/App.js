import ReactDOM from "react-dom";
import React from "react";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Sperm",
//       animal: "dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "wolf",
//       animal: "dog",
//       breed: "german shepherd",
//     }),
//     React.createElement(Pet, { name: "Pete", animal: "bird", breed: "parrot" }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
