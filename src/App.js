import "./App.css";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Home from "./sections/home/Home";
import Resume from "./sections/resume/Resume";

function App() {
  return (
    <div className="App">
      <Home />
      <Resume />
      <About />
      <Contact />
    </div>
  );
}

export default App;
