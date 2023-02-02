import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hotel from "./components/Hotel";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="flex">
            <Header />
            <Hotel />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
