import React, { useState } from 'react'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function App() {

  const [data, setData] = useState("")
  const [unit, setUnit] = useState("")
  const getData = (e) => {
    e.preventDefault();
    setData(e.target.value)
    //// console.log(e.target.value)
  }
  const getUnit = (e) => {
    e.preventDefault();
    //// console.log(e.target.value);
    setUnit(e.target.value)
  }

  const getResult = (e) => {
    e.preventDefault();
    if (unit == "Farenhit") {
      const result = ((data - 32) * 5) / 9;
      //// console.log(result);
      toast.dark(`Result is ▶️ ${result}°C`, {
        position : "top-center",
        autoClose : false,
        newestOnTop : false,
      });
    } else {
      const result = ((9 * data) / 5) + 32;
      //// console.log(result);
      toast.dark(`Result is ▶️ ${result}°F`,{
        position : "top-center",
        autoClose : false,
        newestOnTop : false,
      });
    }
  }





  return (
    <div className="container">
      <div className="inner_div">
        <h1>Temprature converter</h1>
        <form onSubmit={getResult}>
          <input
            value={data}
            type="number"
            onChange={getData} />
          <select
            value={unit}
            id="unit"
            onChange={getUnit}>
            <option>Choose unit..</option>
            <option>Celcious</option>
            <option>Farenhit</option>
          </select>
          <br />
          <button type="submit">Result</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
