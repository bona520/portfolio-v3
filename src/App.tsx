import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";

export default function App() {

  return (
    <div className="w-screen  mt-12 flex-col flex items-center justify-center p-2">
      <Home />
      <About />
      <Experience />
      <Education />
      <Footer />
    </div>
  )
}