import styles from "./Index.module.css";

function HelloWorld() {
  return (
      <div className={styles.IContainer}>
          <h1 className={styles.IContent}>Meu primeiro componente</h1>
    </div>
  );
}

export default HelloWorld;
