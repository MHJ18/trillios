import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hotel from "./components/Hotel";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <Header />
        <Hotel />
      </div>
    </div>
  );
}

export default App;
