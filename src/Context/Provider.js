import React, { useState , useEffect } from 'react';
import Context from './Context';
function Provider({ children }) {
  const [newPlace, setNewPlace] = useState('');
  const [newBuild, setNewBuild] = useState('prédio 1');
  const [allWorkPlace, setAllWorkPlace] = useState([]);

  const buildings = ["prédio 1", "prédio 2", "prédio 3"]


  useEffect(() => {

  }, [allWorkPlace] )

  const handleSubmit = async () =>{
    // const storage = JSON.parse(sessionStorage.getItem('arrLocaisTrabalho'));
    setAllWorkPlace([...allWorkPlace, { place: newPlace, build: newBuild }]);

    // storage.push(allWorkPlace);
    // const workPlace = JSON.stringify(allWorkPlace);

    // sessionStorage.setItem('arrLocaisTrabalho', workPlace);

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