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
    <div>
      {place !== '' &&
      <tr>
        <td>
          <select value={build} onChange={({target})=>{setBuild(target.value)}}>
            { buildings.map((build) => (
              <option key={build}>{build}</option>
            ))}
          </select>
        </td>
        <td><input type="text" value={place} onChange={({target})=>{setPlace(target.value)}} /></td>
        
        <td>
          <ConfirmButton placeBuild={{place, build }} index={index} setIsEditing={setIsEditing}/>
        </td>
      </tr>
      }
     
    </div>
  );
}

export default EditingRow;
