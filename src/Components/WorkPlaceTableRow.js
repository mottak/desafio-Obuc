import React from 'react';
import EditDeleteButton from './EditDeleteButton';


function WorkPlaceTableRow({ placeBuild, index, setIsEditing }){

console.log(placeBuild)
  return(

      <tr className="row-container" >
      {placeBuild && placeBuild.place && 
      <tr>
        <td className="row-item">{placeBuild.place}</td>
        <td className="row-item">{placeBuild.build}</td>
        <td className="row-item">
          <EditDeleteButton place={placeBuild.place} index={index} setIsEditing={setIsEditing} />
        </td>
        </tr>
      }
      </tr>
     
  );
}

export default WorkPlaceTableRow;
