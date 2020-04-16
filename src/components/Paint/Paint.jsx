import React from 'react';
import './Paint.css';

const Paint = (props) => {
  return (
    <React.Fragment>
      <div className="Paint-card">
        <div className="Paint-card-title">{props.paint.colorName}</div>
        <div className="Paint-card-type">{props.paint.paintType}</div>
        <div className="Paint-card-owned">{props.paint.isOwned ? 'Owned' : 'Not Owned'}</div>
        <div className="Paint-card-btn">
          <button
            className="btn"
            onClick={() => props.handleDeletePaint(props.idx)}
          >
            X
          </button>
        </div>
      </div>
      <br></br>
    </React.Fragment>
  );
}
 
export default Paint;
