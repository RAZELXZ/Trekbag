import { useState } from "react";
import BackgroundHeading from "./Components/BackgroundHeading";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ItemLits from "./Components/ItemLits";
import Sidebar from "./Components/Sidebar";
import { itemList } from "./lib/constants";
import "./index.css";

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

  const handleDeleteItem = (id) => {
    const newList = iltst.filter((item) => item.id !== id);
    setIlist(newList);
  };

  const handleToggleItem = (id) => {
    const newList = iltst.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setIlist(newList);
  };
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemLits
          iltst={iltst}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
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
