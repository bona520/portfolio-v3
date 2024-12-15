import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";

export default function App() {

  return (
    <div className="container mx-auto p-4">
      <Home />
      <About />
      <Experience />
      <Education />
      <Footer />
      <ToastContainer />
    </div>
  )
}