import BackgroundHeading from "./Components/BackgroundHeading";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ItemLits from "./Components/ItemLits";
import Sidebar from "./Components/Sidebar";
import "./index.css";

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemLits />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
