import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Aboutus from "./components/Aboutus/Aboutus";
import Login from "./components/Login/Login";
// import Genre from "./pages/Genre";
// import Country from "./pages/Country";
// import Movies from "./pages/Movies";
// import Series from "./pages/Series";
// import Animation from "./pages/Animation";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Header />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about us" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/genre" element={<Genre />} />
          <Route path="/country" element={<Country />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

