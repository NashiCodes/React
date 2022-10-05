function Form() {
  function Cadastro(e) {
    e.preventDefault();
    console.log(`Usuario cadastrado`);
  }

  return (
    <div>
      <form onSubmit={Cadastro}>
        <div>
          <input type="text" placeholder="Digite o seu nome" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
