import buttonStyles from './button.module.css';

function Button(props){
    return <button className={buttonStyles}>{props.buttonName}</button>
}

export default Button;