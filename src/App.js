import React,{ useState, useEffect } from 'react';
import './App.css';

const App = () => {
 
  const APP_ID = "ae5262b5";
  const APP_KEY = "233fdb8a6915262b201daa19a552dfa6";

 

  

  useEffect( () =>{ 
    getRecipes();
  },[]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data);
  }

 return(
    <div className="App">
     
      <form className="search-form">
        <input className="search-bar" type = "text"/>
        <button className="search-button" type = "submit"> Search</button>
      </form>
    </div>
  );

};
  



export default App;




