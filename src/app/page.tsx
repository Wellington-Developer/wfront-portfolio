import Header from "./components/Header";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Footer from "./screens/Footer";
import Intro from "./screens/Intro";
import Projects from "./screens/Projects";
import Services from "./screens/Services";
import Skills from "./screens/Skills";

export default function Home() {
  return (
    <div className="space-y-[60px]">
      <Header />
        <div className="max-w-5xl mx-auto px-4">
          <Intro />
          <Skills />
          <Projects />
          <Services />
          <About />
          <Contact />
        </div>
      <Footer />
    </div>
  );
}
