
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />                 
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
