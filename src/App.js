import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom"
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;
