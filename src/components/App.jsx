import Button from './Button';
import Screen from './Screen';
import calculator from './calculator.module.css'
const button_structure = ["7","8","9","X","4","5","6","-","1","2","3","+","0",".","/","="];
function App(){
    return <><div className={calculator.calculator}>
    <Screen></Screen>
    <div className='buttons'>
    {button_structure.map((btn_name)=>{
        return <Button buttonName={btn_name}> </Button>
    })}
    </div>
    </div>
    </>
};

export default App;