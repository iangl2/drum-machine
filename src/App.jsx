import { useState } from 'react'
import './App.css'
import  Key from './components/key';
function App() {
const [label,setLabel]=useState('Welcome!');
  
  return (
    <>
      <div id="drum-machine">
        <div id="display">
         <h2 id="label">{label}</h2>
         <div id="keyboard">
         <div className='row'>
         <Key letter="Q" identifier='heater1' 
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' changeLabel={(x) =>setLabel(x)}>

          </Key>
          <Key letter="W" identifier='heater2' 
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' changeLabel={(x) =>setLabel(x)}>

          </Key>
          <Key letter="E" identifier='heater3' 
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' changeLabel={(x) =>setLabel(x)}>

          </Key>
          </div>
          <div className='row'>
          <Key letter="A" identifier='heater4' 
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' changeLabel={(x) =>setLabel(x)}>

          </Key>
          <Key letter="S" identifier='clap' 
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'changeLabel={(x) =>setLabel(x)}>

          </Key>
          <Key letter="D" identifier='open-hh' 
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'changeLabel={(x) =>setLabel(x)}>
            
          
          </Key>
          </div>
          <div className='row'>
          <Key letter="Z" identifier='kick-n-hat' 
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'changeLabel={(x) =>setLabel(x)}>

          </Key>
          <Key letter="X" identifier='Kick' 
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'changeLabel={(x) =>setLabel(x)}>

          </Key>
          <Key letter="C" identifier='closed-hh' 
          audioLink='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'changeLabel={(x) =>setLabel(x)}>

          </Key>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
