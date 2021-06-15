import React, { useContext, useState } from 'react';
import Context from '../Context/Context';
import WorkPlaceTableRow from './WorkPlaceTableRow';
import EditingRow from './EditingRow';
import '../App.css';


function WorkPlaceTable(){
  const { allWorkPlace } = useContext(Context);
  const [isEditing, setIsEditing] = useState({ enable: false, index: 0 });
  return(
    <div>
      <table className="table table-bordered table-hover">
  <thead>
    <tr>
      <th className="col-sm-5 table-header text-white">Prédio</th>
      <th className="col-sm-5 table-header text-white">Local de Trabalho</th>
      <th className="col-sm-2 table-header text-white"></th>
    </tr>
  </thead>
  
  <tbody  >
    {allWorkPlace.map((placeBuild, index) =>{ 
      return(
        <tr key={index} className="row-container" >
          {isEditing.enable && isEditing.index === index
            ? <EditingRow placeBuild={placeBuild} index={index} setIsEditing={setIsEditing} />
            : <WorkPlaceTableRow placeBuild={placeBuild} index={index} setIsEditing={setIsEditing} />}
            </tr>
            );
          })}
       </tbody>
  
</table>
    </div>
  );
}

export default WorkPlaceTable;
