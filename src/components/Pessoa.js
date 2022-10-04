import styles from './Pessoa.module.css'

function Pessoa({ name, age, prof, foto }) {
  return (
    <div className={styles.PessoaContainer}>
      <img className={styles.PessoaContent} src={foto} alt={name} />
      <h2 className={styles.PessoaContent}>Nome: {name}</h2>
      <p className={styles.PessoaContent}>Idade: {age}</p>
      <p className={styles.PessoaContent}>Profissão: {prof}</p>
    </div>
  );
}

export default Pessoa;
