import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageHome from "../Pages/Home/Home";
import Oportunidades from "../Pages/Oportunidades/Oportunidades";
import NewVaga from "../Components/NewVaga";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/oportunidades" element={<Oportunidades />} />
        <Route path="/adm" element={<NewVaga />} />
      </Routes>
    </>
  );
}

export default Router;
