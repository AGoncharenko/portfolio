import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="left-column">
          <Summary />
          <Experience />
        </div>
        <div className="right-column">
          <Skills />
          <Education />
        </div>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Andriy Goncharenko. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
