import {useState} from "react";

function Toggle() {
  const [toggle, setToggle] = useState("OFF")

  function switchToggle(){
    if (toggle === "OFF") {
      setToggle("ON")
    } else {
      setToggle("OFF")
    }
  }
  return <button onClick={switchToggle}>{toggle}</button>;
}

export default Toggle;
