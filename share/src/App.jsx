import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Settings from "./Components/Settings/Settings";
import Cards from "./Components/Cards/Cards";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Settings />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
