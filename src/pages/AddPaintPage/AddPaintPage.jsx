import React from 'react';
import AddPaint from '../../components/AddPaint/AddPaint';

const AddPaintPage = (props) => {
  return (
    <div>
        <AddPaint 
          handleAddPaint={props.handleAddPaint}
        />
    </div>
  );
};
 
export default AddPaintPage;
