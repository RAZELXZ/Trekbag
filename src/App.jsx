import { useEffect, useState } from "react";
import BackgroundHeading from "./Components/BackgroundHeading";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ItemLits from "./Components/ItemLits";
import Sidebar from "./Components/Sidebar";
import "./index.css";
import ItemComtextProvider from "./Contexts/ItemComtextProvider";

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <ItemComtextProvider>
          <Header />
          <ItemLits />
          <Sidebar />
        </ItemComtextProvider>
      </main>

      <Footer />
    </>
  );
}

export default App;
