import Navbar from "./Components/Navbar/Navbar";
import Searchbtn from "./Components/Main/Searchbtn";

import Technology from "./Components/Main/Technology";
import Home from "./Components/Main/Home";
import Buisness from "./Components/Main/Buisness";
import Entertainment from "./Components/Main/Entertainment";
import Sports from "./Components/Main/Sports";
import Health from "./Components/Main/Health";
import Science from "./Components/Main/Science";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div className="h-screen w-full">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Search"
          element={
            <>
              <Searchbtn />
              <Home />
            </>
          }
        />

        <Route path="/Technology" element={<Technology />} />
        <Route path="/Buisness" element={<Buisness />} />
        <Route path="/Entertainment" element={<Entertainment />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/Science" element={<Science />} />
      </Routes>
    </div>
  );
};

export default App;
