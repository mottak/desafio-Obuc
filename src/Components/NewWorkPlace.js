import React, { useContext } from 'react';
import Context from '../Context/Context'
import '../App.css';

function NewWorkPlace(){
 
  const { handleSubmit, newPlace, setNewPlace, newBuild, setNewBuild, buildings } = useContext(Context);


  return(
    <div className="input-container form-group">
      <label className="input-item" for="placeInput">
        Local de trabalho:
        <input
          type="text"
          id="placeInput"
          className="form-control"
          value={newPlace}
          onChange={({ target })=>{ setNewPlace(target.value) }}
        />
      </label>
      <label className="input-item" for="buildInput">
      Prédio:
        <select
          value={newBuild}
          className="form-control"
          id="buildInput"
          onChange={({ target })=>{setNewBuild(target.value)}}
        >
          {buildings.map((build)=>{
            return(
              <option key={build}>{build}</option>
            );
          })}
          
        </select>
      </label>
      <button type="button"  className="btn btn-light" onClick={ handleSubmit }>
        +
      </button>
    </div>
  );
}

export default NewWorkPlace;