import React from 'react';
import AddPaint from '../../components/AddPaint/AddPaint';

const AddPaintPage = (props) => {
  return (
    <div>
        <h3>Add a Paint!</h3>
        <AddPaint 
          handleAddPaint={props.handleAddPaint}
        />
    </div>
  );
};
 
export default AddPaintPage;
