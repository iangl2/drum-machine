import React from "react";
import "../stylesheets/key.css"
function Key(props) {
    
    function playDrums(x){
        x=x.toUpperCase();
        document.getElementById(x).play();
        switch (x) {
            case "Q":
              props.changeLabel("Heater 1")
            break;
            case "W":
              props.changeLabel("Heater 2")
            break;
            case "E":
              props.changeLabel("Heater 3")
            break;
             case "A":
              props.changeLabel("Heater 4")
            break;
            case "S":
              props.changeLabel("Clap")
            break;
            case "D":
              props.changeLabel("Open HH")
            break;
             case "Z":
              props.changeLabel("Kick 'n Hat")
            break;
            case "X":
              props.changeLabel("Kick")
            break;
            case "C":
              props.changeLabel("Closed HH")
            break;
          }
      }
      window.document.onkeydown =function(event){playDrums(event.key)}

    return (
      <>      
        <div className='drum-pad' id={props.identifier} onClick={()=>playDrums(props.letter)}  >
            <div className="keyLabel">{props.letter}</div>
            <audio src={props.audioLink} 
            className='clip' id={props.letter}></audio>
          </div>
      </>
    )
  }
  
  export default Key 