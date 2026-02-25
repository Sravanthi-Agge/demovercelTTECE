

import Reg from "./Reg";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h1>This is App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/reg" element={<Reg />} />
          <Route path="/h" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;