import React from 'react';
import Paint from '../Paint/Paint';
import './PaintList.css';

const PaintList = (props) => {
  if(props.paints.length){
    return (
      <>
        <div><h3>Paint List</h3></div>
        <div className="PaintList">
          {props.paints.map((paint, idx) =>
            <div>
              <Paint
                idx = {idx}
                key= {paint._id}
                paint = {paint}
                handleDeletePaint = {props.handleDeletePaint}
              />
              <br></br>
            </div>
          )}
        </div>
      </>
    )
  } else {
    return (
      <h3>You don't have any paints stored!</h3>
    )
  }
};
 
export default PaintList;
