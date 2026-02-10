import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Characters from "./pages/Characters";
import Items from "./pages/Items";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0f172a] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
