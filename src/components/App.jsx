import Button from './Button';
import Screen from './Screen';
import calculator from './styles/calculator.module.css'
import { useState } from 'react';

const button_structure = ["7","8","9","x","4","5","6","-","1","2","3","+","0",".","/","="];
function App(){
    
    const [screenText, alterScreenText] = useState([])
    const all_inputs = []
    function clicked_button(){
        alterScreenText((old_val)=>{
           return [...old_val,this.buttonName]
        })
    };

    return <><div className={calculator.calculator}>
    <Screen nums={screenText}></Screen>
    <div className='buttons'>
    {button_structure.map((btn_name)=>{
        return <Button handle_click={clicked_button} buttonName={btn_name}> </Button>
    })}
    </div>
    </div>
    </>
};

export default App;