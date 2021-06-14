import React, { useContext } from 'react';
import Context from '../Context/Context';

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
      <button type="button" onClick={handleConfirm}>v</button>
      <button type="button" onClick={handleCancel}>x</button>
    </div>
  );
}

export default ConfirmButton;
