import React from 'react';
import './Paint.css';

const Paint = (props) => {
  return (
    <React.Fragment>
      <div className="Paint-card">
        <p>{props.paint.colorName}</p>
        <p>{props.paint.paintType}</p>
        <p>{props.paint.isOwned ? 'Owned' : 'Not Owned'}</p>
        <button
          className="button"
          onClick={() => props.handleDeletePaint(props.idx)}
        >
          X
        </button>
      </div>
      <br></br>
    </React.Fragment>
  );
}
 
export default Paint;
