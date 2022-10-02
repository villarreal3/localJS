import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate  } from "react-router-dom";

import Page1 from "./../page1";
import Page2 from "./../page2";
import Page3 from "./../page3";
import LogIn from "./../account/index";

function Main() {
    const shouldRedirect = true;

    return(
      <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="register" element={<h2>Register</h2>} />
          <Route exact path="page1" element={<Page1 />} />
          <Route exact path="page2" element={
            shouldRedirect ? (
              <Navigate replace to="/logIn" />
            ) : (
              <Page2 />
            )
          } />
          <Route exact path="page3" element={<Page3 />} />
        </Routes>
    );
}

export default Main