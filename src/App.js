import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [response, setResponse] = useState("");
  const handleForChange = (event) => {
    const epochTime = new Date(`${event.target.value} 06:00`);
    const epochTimeZone = epochTime.getTime();
    fetch(`http://localhost:3001/bookCultClass?epochTime=${epochTimeZone}`)
      .then((res) => res.json())
      .then((result) => {
        setResponse(JSON.stringify(result, null, 6));
      });
  };
  return (
    <div className="App">
      <div>
        <input
          type="date"
          onChange={handleForChange}
          style={{ fontSize: "34px", fontFamily: "nano" }}
        ></input>
        <pre
          style={{ fontSize: "24px", fontFamily: "nano", textAlign: "left" }}
        >
          {response}
        </pre>
      </div>
    </div>
  );
}

export default App;
