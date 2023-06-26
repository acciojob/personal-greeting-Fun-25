
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name,setName]=useState("")
  return (
    <div>
      <form>
        <p>Enter your name:</p>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
      {name && <p>Hello {name}!</p>}
    </div>
  );
}

export default App
