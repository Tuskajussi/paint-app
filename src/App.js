import './App.css';
//import React, {useState} from 'react';
import rooms from "./data.json";
import NameForm, {Form, form} from "./nameform";
import Spaces from "./spaces";
//import Painted from "./painted";
//import handleClick from "./handleClick";


function App() {
  /*
  let formData = {name: "Default", price: 1, adequacy: 1};
  const [painted, setPainted] = useState(false)

  const handleFormClick = () => {
      setPainted(!painted);
  }
*/
  return (
    <div className="app-wrapper">
      <NameForm /*handleClick={handleFormClick}*//>
      <Spaces data={rooms} />
    </div>
  );
}

export default App;