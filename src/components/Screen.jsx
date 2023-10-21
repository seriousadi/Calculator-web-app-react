import screen from './styles/screen.module.css';
function Screen(props){
    return <div className={screen.screen}><h1 className={screen.text}>{props.nums} </h1></div>
};
export default Screen;