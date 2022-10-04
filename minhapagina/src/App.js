import "./App.css";
import HelloWorld from "./components/Index.js";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  const nome = "jão";
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName name="Nashii" />
      <SayMyName name={nome} />
      <Pessoa
        name="João"
        age="20"
        prof="Dev"
        foto="https://via.placeholder.com/100"
      />
    </div>
  );
}

export default App;
