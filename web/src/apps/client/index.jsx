import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import EventsIndex from "./pages/Events";
import NavProvider from "../../state/context/ClientNavbar";

const ClientIndex = () => {
  return (
    <NavProvider>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="events/*" element={<EventsIndex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </NavProvider>
  );
};

export default ClientIndex;
