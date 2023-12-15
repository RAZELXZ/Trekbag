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

  const handleAddItem = (text) => {
    const newItem = {
      id: new Date().getTime(),
      name: text,
      packed: false,
    };
    setIlist((prev) => [...prev, newItem]);
  };
  const handleDeleteAllItems = () => {
    setIlist([]);
  };
  const handleReset = () => {
    setIlist(itemList);
  };
  const handleMarkAllComplete = () => {
    const newList = iltst.map((item) => {
      return { ...item, packed: true };
    });
    setIlist(newList);
  };
  const handleMarkAllIncomplete = () => {
    const newList = iltst.map((item) => {
      return { ...item, packed: false };
    });
    setIlist(newList);
  };
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemLits iltst={iltst} />
        <Sidebar
          handleAddItem={handleAddItem}
          handleDeleteAllItems={handleDeleteAllItems}
          handleReset={handleReset}
          handleMarkAllComplete={handleMarkAllComplete}
          handleMarkAllIncomplete={handleMarkAllIncomplete}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
