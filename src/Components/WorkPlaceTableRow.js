import React from 'react';
import EditDeleteButton from './EditDeleteButton';


function WorkPlaceTableRow({ placeBuild, index, setIsEditing }){

console.log(placeBuild)
  return(
      <>
      {placeBuild && placeBuild.place && 
      <>
        <td className="col-sm-4 row-item">{placeBuild.build}</td>
        <td className="col-sm-4 row-item">{placeBuild.place}</td>
        <td className="col-sm-4 row-item">
          <EditDeleteButton place={placeBuild.place} index={index} setIsEditing={setIsEditing} />
        </td>
      </>
      }
     </>
  );
}

export default WorkPlaceTableRow;
