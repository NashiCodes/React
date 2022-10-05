import styles from "./Index.module.css";

function Event({ number }) {

  function MeuEvento() {
    console.log(`ESSE BOTÃO FOI ATIVADO ${number}`);
  }
  
  return (
    <div className={styles.IContainer}>
      <h1 className={styles.IContent}>Clique No botão para ativar o Evento</h1>
      <button onClick={MeuEvento}>Ativar!</button>
    </div>
  );
}

export default Event;
