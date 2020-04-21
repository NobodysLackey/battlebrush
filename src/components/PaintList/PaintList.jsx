import React from 'react';
import Paint from '../Paint/Paint';
import './PaintList.css';

const PaintList = (props) => {
  if(props.paints.length){
    return (
      <>
        <center>
        <div className="title">
          <h2>Paint List</h2>
        </div>
        <div className="PaintList">
          {props.paints.map((paint, idx) =>
            <div className="PaintCard">
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
        </center>
      </>
    )
  } else {
    return (
      <h3 className="title">You don't have any paints stored!</h3>
    )
  };
};
 
export default PaintList;
