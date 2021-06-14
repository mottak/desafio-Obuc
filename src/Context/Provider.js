import React, { useState , useEffect } from 'react';
import Context from './Context';
function Provider({ children }) {
  const [newPlace, setNewPlace] = useState('');
  const [newBuild, setNewBuild] = useState('prédio 1');
  const [allWorkPlace, setAllWorkPlace] = useState([]);

  const buildings = ["prédio 1", "prédio 2", "prédio 3"]


  useEffect(() => {
    console.log(allWorkPlace)
    sessionStorage.setItem('arrLocaisTrabalho', JSON.stringify(allWorkPlace));
  }, [allWorkPlace] )

  const handleSubmit = async () =>{

    setAllWorkPlace([...allWorkPlace, { place: newPlace, build: newBuild }]); 
    
    setNewPlace('');
    setNewBuild('');
  }

const contextValue = {
  newPlace,
  setNewPlace,
  newBuild,
  setNewBuild,
  handleSubmit,
  allWorkPlace,
  setAllWorkPlace,
  buildings,
}
return (
  <Context.Provider value={ contextValue }>
    { children }
  </Context.Provider>
);
}

export default Provider;