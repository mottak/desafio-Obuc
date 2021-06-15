import React from 'react';
import EditDeleteButton from './EditDeleteButton';


function WorkPlaceTableRow({ placeBuild, index, setIsEditing }){

console.log(placeBuild)
  return(
      <>
      {placeBuild && placeBuild.place && 
      <>
        <td className="row-item">{placeBuild.build}</td>
        <td className="row-item">{placeBuild.place}</td>
        <td className="row-last-child">
          <EditDeleteButton place={placeBuild.place} index={index} setIsEditing={setIsEditing} />
        </td>
      </>
      }
     </>
  );
}

export default WorkPlaceTableRow;
