import './App.css';
import React, {useState} from 'react';
import rooms from "./data.json";
import NameForm from "./nameform";
import Spaces from "./spaces";
import Painted from "./painted";
//import handleClick from "./handleClick";


function App() {
  let formData = {};

  const [nameForm, setNameForm] = useState(false)

  const handleFormClick = (name, price, adequacy) => {
      formData = {name, price, adequacy};
  }

  return (
    <div className="app-wrapper">
      <NameForm handleClick={handleFormClick}/>
      <Painted data={rooms} dataFromForm={formData}/>
      <Spaces data={rooms} />
    </div>
  );
}

export default App;