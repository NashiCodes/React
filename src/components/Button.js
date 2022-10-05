function Button(props) {
  return <button onClick={props.event} type={props.btype}>{props.text}</button>;
}

export default Button;
