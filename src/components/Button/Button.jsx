import './Button.css';
const Button = (props) => {
  const { handleClick } = props;

  return (
    <button onClick={handleClick} className="custom-btn">
      {props.label}
    </button>
  );
};

export default Button;
