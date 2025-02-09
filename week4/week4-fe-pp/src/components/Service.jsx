import {useState} from 'react';

const Service = ({ id, icon, title, text, onDelete }) => {

  const handleDelete = () => {
    onDelete(id); // Pass the item's ID to the parent component for deletion
  };

  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p className='service-text'>{text}</p>
      </div>
      <button onClick={handleDelete}>Delete</button> {/* Add Delete Button */}
    </article>
  )
}
export default Service