import React from "react";
import IndexPage from "./components/pages/IndexPage";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={IndexPage} />
      </BrowserRouter>
    </>
  );
}
