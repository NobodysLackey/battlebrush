import React from 'react';
import AddPaint from '../../components/AddPaint/AddPaint';

const AddPaintPage = (props) => {
  return (
    <React.Fragment>
        <h3>Add a Paint!</h3>
        <AddPaint 
          handleAddPaint={props.handleAddPaint}
        />
    </React.Fragment>
  );
};
 
export default AddPaintPage;
