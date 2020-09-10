



import React from "react";
import Message from "./Message";
import CodeBit from "./CodeBit";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/message/:number" component={Message} exact={true} />
        <Route path="/codebit/:number" component={CodeBit} exact={true} />

      </div>
    </BrowserRouter>
  );
}

export default App;

