import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import RouterPath from "./router/router";

import { useState } from "react";

function App() {
  return (
    <div className="h-full">
      <RouterPath />
    </div>
  );
}

export default App;
