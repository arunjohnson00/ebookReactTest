import Bookadd from "./container/bookadd/Bookadd";
import Bookview from "./container/bookview/Bookview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

function App() {
 

  const dispatch = useDispatch();
  const ebookStore: any = useSelector((ebookData) => ebookData);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("data") || "{}");
   // if (ebookStore.data.length === 0) {
      console.log(typeof localData);

      if (localData.length !== undefined) {
        dispatch({
          type: "initialSetup",
          payload: localData,
        });
      } 
  //  }
  }, []);

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
