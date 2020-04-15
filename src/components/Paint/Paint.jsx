import React from 'react';
import './Paint.css';

const Paint = (props) => {
  return (
      <div className="Paint-card">
        <p>{props.paint.colorName}</p>
        <p>{props.paint.paintType}</p>
        <p>
          {props.paint.isOwned ? 'Owned' : 'Not Owned'}
        </p>
        <button
          className="button"
          onClick={() => props.handleDeletePaint(props.paint._id)}
        >
          Remove
        </button>
      </div>
  );
}
 
export default Paint;
