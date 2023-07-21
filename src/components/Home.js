import Alert from "./Alert"
import Navbar from "./Navbar"
import TextForm from "./TextForm"

import React, { useState } from "react"



const Home = ()=>{
    const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='black';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
    }
  }
    return(
        <>
        <Navbar title="Jacks" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} heading="Enter Text Hear" mode={mode}/>

        </>
    )
}


export default Home;