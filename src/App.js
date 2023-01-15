import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Project from "./components/Project"
import About from "./components/About";


function App() {
  return (
    <div>
      <Header />
      <HashRouter basename={process.env.PUBLIC_URL}>
       <Routes>
          <Route path="/" element={<About/>} />
         <Route path="/my-work" element={<Project/>} />
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
