function Pessoa({name, age, prof, foto}) {
  return (
    <div>
      <img src={foto} alt={name} />
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {prof}</p>
    </div>
  );
}

export default Pessoa;
