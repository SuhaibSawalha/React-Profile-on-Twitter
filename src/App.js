import "./App.css";
import Navbar from "./components/Navbar/index";
import Main from "./components/Main/index";
import Side from "./components/Side/index";

function App() {
  return (
    <div id="App">
      <div id="App-container">
        <Navbar />
        <Main />
        <Side />
      </div>
    </div>
  );
}

export default App;
