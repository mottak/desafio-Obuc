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
      <table className="table table-sm">
  <thead>
    <tr>
      <th scope="col" className="p-3 mb-2 bg-primary text-white">Local de Trabalho</th>
      <th scope="col" className="p-3 mb-2 bg-primary text-white">Prédio</th>
      <th scope="col" className="p-3 mb-2 bg-primary text-white">1</th>
    </tr>
  </thead>
  
    {allWorkPlace.map((placeBuild, index) =>{ 
      return(
        <tbody key={index} >
          {isEditing.enable && isEditing.index === index
            ? <EditingRow placeBuild={placeBuild} index={index} setIsEditing={setIsEditing} />
            : <WorkPlaceTableRow placeBuild={placeBuild} index={index} setIsEditing={setIsEditing} />}
        </tbody>
      );
    })}
  
</table>
    </div>
  );
}

export default WorkPlaceTable;
