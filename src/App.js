import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Project from "./components/Project"
import About from "./components/About";


function App() {
  return (
    <div>
      <Header />
       <Routes>
          <Route exact path="/" element={<About/>} />
         <Route exact path="/my-work" element={<Project/>} />
      </Routes>
    </div>
  );
}

export default App;
