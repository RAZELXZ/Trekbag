import { useState } from "react";
import BackgroundHeading from "./Components/BackgroundHeading";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ItemLits from "./Components/ItemLits";
import Sidebar from "./Components/Sidebar";
import "./index.css";
import { itemList } from "./lib/constants";

function App() {
  const [iltst, setIlist] = useState(itemList);
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemLits iltst={iltst} />
        <Sidebar setIlist={setIlist} />
      </main>

      <Footer />
    </>
  );
}

export default App;
