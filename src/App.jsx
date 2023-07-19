import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
