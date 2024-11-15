import { Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "./Components/Articles/Articles";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Routes>
      {/* Default route for Home */}
      <Route path="/" element={<Home />} />
      
      {/* Route for Articles */}
      <Route path="/articles" element={<Articles />} />

      {/* invalid paths redirected to Home */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
