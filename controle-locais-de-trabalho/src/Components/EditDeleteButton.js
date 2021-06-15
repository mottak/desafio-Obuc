import React, { useContext } from 'react';
import Context from '../Context/Context';
import { RiPencilFill } from 'react-icons/ri';
import { BsTrashFill } from 'react-icons/bs';


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
      <button type="button" className="btn btn-light" onClick={handleEdit}><RiPencilFill /></button>
      <button type="button" className="btn btn-light" onClick={handleDelete}><BsTrashFill /></button>
    </div>
  );
}

export default EditDeleteButton;
