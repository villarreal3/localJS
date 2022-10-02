import React ,  { useState } from "react"

import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Components/nav/index"
import Main from "./Components/main/index"

function App() {
  

  return (
    <div className="App">
      <Router>
        <nav>
          <Navbar/>
        </nav>

        <main>
          <Main/>
        </main>
        
      </Router>
    </div>
  );
}

export default App;