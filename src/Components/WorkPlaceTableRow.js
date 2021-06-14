import React from 'react';
import EditDeleteButton from './EditDeleteButton';


function WorkPlaceTableRow({ placeBuild, index, setIsEditing }){

console.log(placeBuild)
  return(
    <div>
      {placeBuild && placeBuild.place && 
      <tr>
        <td>{placeBuild.place}</td>
        <td>{placeBuild.build}</td>
        <td>
          <EditDeleteButton place={placeBuild.place} index={index} setIsEditing={setIsEditing} />
        </td>
      </tr>

      }
     
    </div>
  );
}

export default WorkPlaceTableRow;
