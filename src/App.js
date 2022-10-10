import "./App.css";
import NavBar from "./components/NavBar";
import ToDo from "./components/ToDo";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider>
      <div className="App">
        <NavBar></NavBar>
        <ToDo></ToDo>
      </div>
    </Provider>
  );
}

export default App;
