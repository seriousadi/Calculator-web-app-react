import buttonStyles from './styles/button.module.css';


function Button(props){
    return <button className={buttonStyles} onClick={(btn)=>{
        props.handle_click(btn.target.innerText)
    }}>{props.buttonName}</button>
}

export default Button;