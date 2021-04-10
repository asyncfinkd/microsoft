import React from "react";
import IndexPage from "./components/pages/IndexPage";
import { BrowserRouter, Route } from "react-router-dom";
import GEIndexPage from "./components/pages/ka/GEIndexPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={IndexPage} />
        <Route path="/ka" component={GEIndexPage} />
      </BrowserRouter>
    </>
  );
}
