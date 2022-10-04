import "./App.css";

function App() {
  const name = "Jão";
  const upper = name.toUpperCase();

  function soma(a, b) {
    return a + b;
  }

  const url='https://via.placeholder.com/200'
  return (
    <div className="App">
      <h1>MEU PROJETO HMTL EM REACT</h1>
      <p>Olá, {upper}</p>
      <p>Soma: {soma(4, 3)}</p>
      <img src={url} alt=""/>
    </div>
  );
}

export default App;
