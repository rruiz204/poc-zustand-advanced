import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./pages/Home";
import { Cow } from "./pages/Cow";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cows" element={<Cow></Cow>}></Route>
      </Routes>
    </BrowserRouter>
  );
};