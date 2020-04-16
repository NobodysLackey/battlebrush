import React from 'react';
import './Paint.css';

const Paint = (props) => {
  return (
    <React.Fragment>
      <div className="Paint-card">
        <div className="Paint-card-drop-div">
          <div className="Paint-card-drop"><img src="./drop-grey.png" alt="paintdrop"/></div>
        </div>
        <div className="Paint-card-title">{props.paint.colorName}</div>
        <div className="Paint-card-type">{props.paint.paintType}</div>
        <div className="Paint-card-owned">{props.paint.isOwned ? '✅ In Collection' : '🚫 Not In Collection'}</div>
        <div className="Paint-card-btn">
          <button
            className="btn"
            onClick={() => props.handleDeletePaint(props.idx)}
          >
            x
          </button>
        </div>
      </div>
      <br></br>
    </React.Fragment>
  );
}
 
export default Paint;
