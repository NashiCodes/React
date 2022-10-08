import "./App.css";
import Lista from "./components/Lista";

function App() {
  const itens = ['REACT', 'ANGULAR', 'VUE', 'JAVASCRIPT', 'C++'];
  return (
    <div className="App">
      <h1>RENDERIZAÇÃO DE LISTAS</h1>
      <Lista itens={itens} />
      <Lista itens={[]} />
    </div>
  );
}

export default App;
