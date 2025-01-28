import React from "react";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import FetchData from "./components/FetchData";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">React Forms Example</h1>
      <ControlledForm />
      <UncontrolledForm />
      <FetchData />
    </div>
  );
}

export default App;
