const Button = (props) => {
    console.log(props )
    return <button onClick={props.handleClick} className="btn btn-secondary" >{props.label}</button>
}
export default Button