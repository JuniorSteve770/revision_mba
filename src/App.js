import React from "react";
import Navbar from "./component/Navbar.js";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import SignUp2 from "./pages/signupcopy";
import Contact from "./pages/contact";
import Amundi from "./pages/etfamundi";


import './App.css';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route
            path="/contact"
            element={<Contact />}
        />
        <Route path="/blogs" element={<Blogs />} />
        <Route
            path="/sign-up"
            element={<SignUp />}
        />
        <Route
            path="/signup"
            element={<SignUp2 />}
        />
                <Route
            path="/etfamundi"
            element={<Amundi />}
        />
    </Routes>
</Router>


     
  );
}

export default App;
