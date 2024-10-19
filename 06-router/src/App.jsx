import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Recepies from "./pages/Recepies";
import User from "./pages/User";
function App() {
  return (
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recepies />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:username" element={<User />} />
        </Routes>
      
    </Router>
  );
}

export default App;
