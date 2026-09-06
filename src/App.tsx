import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="pb-28 md:pb-0">
      <Navbar />

      {/* full-bleed hero — its own backdrop reaches the viewport edges */}
      <Home />

      {/* the rest of the page shares one constrained column */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <About />
        <Experience />
        <Education />
        <Footer />
      </main>

      <ToastContainer />
    </div>
  );
}
