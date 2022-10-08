import "./App.css";
import { useState } from "react";
import StateLift from "./components/StateLift";
import Saudacao from "./components/Saudacao";

function App() {
  const [nome, setNome] = useState();
  return (
    <div className="App">
      <h1>STATE LIFT</h1>
      <StateLift setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  );
}

export default App;
