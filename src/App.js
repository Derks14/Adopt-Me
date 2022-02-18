import ReactDOM from "react-dom";
import React from "react";
import {StrictMode} from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

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
      <Router>

        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>

        <Switch>

          <Route path="/details/:id">
            <Details/>
          </Route>

          <Route path="/">
            <SearchParams/>
          </Route>

        </Switch>
      </Router>

    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>
 , document.getElementById("root"));
