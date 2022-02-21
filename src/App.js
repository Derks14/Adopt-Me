import ReactDOM from "react-dom";
import React, { useState } from "react";
import { StrictMode } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

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
  const themeHook = useState("darkblue")
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>

          <Switch>
            <Route path="/details/:id">
              <ErrorBoundary>
                <Details />
              </ErrorBoundary>
            </Route>

            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>

    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
