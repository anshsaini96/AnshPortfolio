import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Projects, Contact } from "./Pages";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;


