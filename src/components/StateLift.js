function StateLift({ setNome }) {
  return (
    <div>
      <p>Digite seu Nome</p>
      <input
        type="text"
        placeholder="qual é o seu nome?"
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
}

export default StateLift;
