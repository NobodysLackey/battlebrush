import React from 'react';
import Paint from '../Paint/Paint';
import './PaintList.css';

const PaintList = (props) => {
  if(props.paints.length){
    return (
        <div className="PaintList">
          {props.paints.map((paint) =>
            <Paint
                key= {paint._id}
                paint = {paint}
                handleDeletePaint = {props.handleDeletePaint}
              />
            )}
        </div>
    )
  } else {
    return (
      <h3>You don't have any paints stored!</h3>
    )
  }
};
 
export default PaintList;
