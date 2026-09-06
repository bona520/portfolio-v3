import About from "@shared/About";
import Education from "@shared/Education";
import Experience from "@shared/Experience";
import Footer from "@layout/Footer";
import Home from "@shared/Home";
import Navbar from "@layout/Navbar";
import ScrollToTop from "@shared/ScrollToTop";

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
      <ScrollToTop />
    </div>
  );
}
