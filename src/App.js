import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Project from "./components/Project"
import About from "./components/About";


function App() {
  return (
    <div>
      <Header />
       <Routes>
          <Route path="/react-portfolio" element={<About/>} />
         <Route path="/react-portfolio/my-work" element={<Project/>} />
      </Routes>
    </div>
  );
}

export default App;
