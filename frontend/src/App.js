import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Contact from "./component/Contact";
import Linkk from "./component/Link";
import About from "./component/About";
import Index from "./component/index";
import Create from "./component/Create";
import Update from "./component/Update";
import Delete from "./component/Delete";
import Edit from "./component/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Linkk />}>
          <Route index element={<Index />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/update" element={<Edit />} />


          <Route path="/delete" element={<Delete />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
