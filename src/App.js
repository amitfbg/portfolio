import "./App.css";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Home from "./sections/home/Home";
import Resume from "./sections/resume/Resume";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Resume />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
