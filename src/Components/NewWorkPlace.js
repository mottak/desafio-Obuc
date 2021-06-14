import React, { useContext } from 'react';
import Context from '../Context/Context'

function NewWorkPlace(){
 
  const { handleSubmit, newPlace, setNewPlace, newBuild, setNewBuild, buildings } = useContext(Context);


  return(
    <div>
      <label>
        Local de trabalho:
        <input type="text" value={newPlace} onChange={({ target })=>{ setNewPlace(target.value) }}/>
      </label>
      <label>
      Prédio:
        <select value={newBuild} onChange={({ target })=>{setNewBuild(target.value)}}>
          {buildings.map((build)=>{
            return(
              <option key={build}>{build}</option>
            );
          })}
          
        </select>
      </label>
      <button type="button" onClick={ handleSubmit }>
        Adicionar
      </button>
    </div>
  );
}

export default NewWorkPlace;