import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/movie" component={MovieDetail}></Route>
    </HashRouter>
  );
}

export default App;
