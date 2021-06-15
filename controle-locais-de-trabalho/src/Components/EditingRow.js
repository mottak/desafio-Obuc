import React, { useContext, useState, useEffect } from 'react';
import ConfirmButton from './ConfirmButton';
import Context from '../Context/Context';


function EditingRow({ placeBuild, index, setIsEditing }){
  const { buildings } = useContext(Context);
  const [place, setPlace] = useState('');
  const [build, setBuild] = useState('')
  
  useEffect(() => {
    setPlace(placeBuild.place);
    setBuild(placeBuild.build)
  }, []);

  return(
    <>
      {place !== '' &&
      <>
        <td className="row-item">
          <select value={build} onChange={({target})=>{setBuild(target.value)}}>
            { buildings.map((build) => (
              <option key={build}>{build}</option>
            ))}
          </select>
        </td>
        <td className="row-item">
          <input
            type="text"
            className="edit-input"
            value={place}
            onChange={({target})=>{setPlace(target.value)}}
          />
        </td>
        
        <td className="row-last-child">
          <ConfirmButton placeBuild={{place, build }} index={index} setIsEditing={setIsEditing}/>
        </td>
      </>
      }
    </>
  );
}

export default EditingRow;
