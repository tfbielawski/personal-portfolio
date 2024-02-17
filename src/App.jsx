import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<AboutMe />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
