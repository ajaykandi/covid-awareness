import "./App.scss";
import Consult from "./components/consult/Consult";
import Footer from "./components/footer/Footer";
import Handwash from "./components/handwash/Handwash";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Precautions from "./components/precautions/Precautions";
import Prevent from "./components/prevent/Prevent";
import Symptoms from "./components/symptoms/Symptoms";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Prevent />
      <Symptoms />
      <Precautions />
      <Consult />
      <Handwash />
      <Footer />
      <a href="#home" class="scroll-top">
        <img src="assets/images/scroll-img.png" alt="" />
      </a>
    </div>
  );
}

export default App;
