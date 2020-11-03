import React from "react";
import "./App.css";

import WelcomePage from "./pages/WelcomePage";
import InputPage from "./pages/InputPage";
import OutputPage from "./pages/OutputPage";
import Navigation from "./components/Navigation";
import FactsPage from "./pages/FactsPage";
import DonationsPage from "./pages/DonationsPage";

function App() {
  return (
    <>
      {/* <div>octo.js</div> */}
      <FactsPage />
      {/* <DonationsPage /> */}
      {/* <>Some logic (redux) to manage current page</>
  <Navigation /> */}
    </>
  );
}

export default App;
