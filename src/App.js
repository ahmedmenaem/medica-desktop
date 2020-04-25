import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Router } from "@reach/router";
import HomePage from "./pages/home/Home";
import PatientProfilePage from "./pages/patient/PatientProfile";
import PatientNotFound from "./pages/patient/PatientNotFound";

function App() {
  return (
    <Router>
      <HomePage path="/" />
      <PatientProfilePage path="/patients/:patientId" />
      <PatientNotFound path="/patients/not-found" />
    </Router>
  );
}

export default App;
