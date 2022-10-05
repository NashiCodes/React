import styles from "./Index.module.css";
import Button from "./Button";

function Event() {

  function primeiroEvento() {
    console.log(`ATIVANDO PRIMEIRO EVENTO`);
  }

  function segundoEvento() {
    console.log(`ATIVANDO SEGUNDO EVENTO`);
  }

  return (
    <div className={styles.IContainer}>
      <h1 className={styles.IContent}>Clique No botão para ativar o Evento</h1>
      <Button event={primeiroEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
    </div>
  );
}

export default Event;
