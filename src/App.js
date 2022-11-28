import { useState } from 'react';
import './App.css';
import Service from './Services/RequestMethods';
function App() {
  const [username,setUsername]=useState('');
  const changeHandler = (event)=>{
    setUsername(event.target.value);
  }

  const Fetch = ()=>{
    Service.getGithubAccount(username).then(data=>{
      let key = document.createElement('h2')
      let value = document.createElement('div')
      //converting object to an array;
      let convertedKeys = Object.keys(data);
      let convertedValues = Object.values(data);
      

      key.innerHTML= convertedKeys;
      value.innerHTML= convertedValues;
      document.getElementById('root').append(key)
      document.getElementById('root').append(value)
    })
  }

  const handleEnter = (e)=>{
    if(e.key === 'Enter')
    {
      Fetch();
    }
  }
  return (
    <>
    <div>Getting my data from github</div>
    <input type="text" onChange={changeHandler}  onKeyDown={handleEnter} value={username}/>
    <button onClick={Fetch} >Fetch</button>
    </>
  );
}

export default App;
