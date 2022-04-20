import {useState} from "react";

function Toggle() {
  const [toggle, setToggle] = useState("OFF")
  const [isOn, setIsOn] = useState(false);

  function switchToggle(){
    if (toggle === "OFF") {
      setToggle("ON")
    } else {
      setToggle("OFF")
    }
  }

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";

  return (
    <div>
      <button onClick={switchToggle}>{toggle}</button> 
      <button style={{ background: color }} onClick={handleClick}>
        {isOn ? "ON" : "OFF"}
      </button> 
    </div>
  )}

export default Toggle;
