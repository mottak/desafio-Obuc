import React, { useContext } from 'react';
import Context from '../Context/Context';
import { GoCheck, GoX } from 'react-icons/go';



function ConfirmButton({ placeBuild, index, setIsEditing }){
  const { allWorkPlace, setAllWorkPlace } = useContext(Context);
    
  const handleConfirm = () => {
    const workPlaces = [...allWorkPlace];
    workPlaces.splice(index, 1, placeBuild);
    setAllWorkPlace(workPlaces);
    setIsEditing({ enable: false, index: 0});
  }

  const handleCancel = () => {
    setIsEditing({ enable: false, index: 0});
  }

  return(
    <div>
      <button type="button" className="btn btn-light" onClick={handleConfirm}><GoCheck /></button>
      <button type="button" className="btn btn-light" onClick={handleCancel}><GoX /></button>
    </div>
  );
}

export default ConfirmButton;
