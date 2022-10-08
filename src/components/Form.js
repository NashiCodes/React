import Button from "./Button";
import { useState } from "react";

function Form() {
  function Cadastro(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`);
    console.log(`Seu E-mail cadastrado é: ${email}`);
  }
  function limpar() {
    setUserEmail("");
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  return (
    <div>
      <h1>MEU CADASTRO</h1>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <Button btype="submit" text="Cadastrar" event={Cadastro} />
        </div>
        {(userEmail === undefined || userEmail === "") && (
          <div>
            <p>Email vazio</p>
          </div>
        )}
        {userEmail && (
          <div>
            <p>O email do usuario é: {userEmail}</p>
            <Button text="Limpar Email" event={limpar} />
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
