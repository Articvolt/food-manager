import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Card from "./pages/Card/Card";
import Navbar from "./components/Navbar/Navbar";
// import './App.css'

function App() {

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </Router>
  )
}

export default App
