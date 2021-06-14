import React, { useContext } from 'react';
import Context from '../Context/Context';

function EditDeleteButton({place, index, setIsEditing}){
  const { allWorkPlace, setAllWorkPlace } = useContext(Context);

  
  const handleDelete = () => {
    const items = allWorkPlace.filter((workPlace)=> workPlace.place !== place);
    setAllWorkPlace(items);
  }

  const handleEdit = () => {
    const workPlaces = [...allWorkPlace];
    workPlaces.splice(index);
    setIsEditing({ enable: true, index: index });
  }

  return(
    <div>
      <button type="button" onClick={handleEdit}>Edit</button>
      <button type="button" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default EditDeleteButton;
