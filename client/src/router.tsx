import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "./pages/Home";
import { Basics } from "./pages/Basics";

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/basics" element={<Basics></Basics>}></Route>
      </Routes>
    </BrowserRouter>
  );
};