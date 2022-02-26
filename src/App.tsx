import Bookadd from "./container/bookadd/Bookadd";
import Bookview from "./container/bookview/Bookview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bookview />} />
          <Route path="/Edit" element={<Bookadd />} />
          <Route path="/Add" element={<Bookadd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
