import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import WhitePage from "./WhitePage";
import BlackPage from "./BlackPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={WhitePage} exact/>
        <Route path="/white" component={WhitePage} exact/>
        <Route path="/black" component={BlackPage} exact/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
