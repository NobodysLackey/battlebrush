import React from 'react';
import { Link } from 'react-router-dom';
import './Paint.css';

const Paint = ({paint, handleDeletePaint, idx}) => {
  return (
    <React.Fragment>
      <div className="Paint-card">
      <div className="Paint-card-drop-div">
        
          <div 
            className="Paint-card-drop"
            style={{"backgroundColor":`rgba(${paint.color.r}, ${paint.color.g}, ${paint.color.b}, ${paint.color.a})`}}
          >
            <Link
              to={{
                pathname: '/update',
                state: {paint},
                idx: idx
              }}
            >
              <img className="Paint-card-drop" src="./drop-grey.png" alt="paintdrop"/>
            </Link>
          </div>
        </div>
        <div className="Paint-card-title" >{paint.colorName}</div>
        <div className="Paint-card-type">{paint.paintType}</div>
        <div className="Paint-card-owned">{paint.isOwned ? 'In Collection' : 'Not In Collection'}</div>
        <Link
          className='update-btn'
          to={{
            pathname: '/update',
            state: {paint},
            idx: idx
          }}
        >
        UPDATE
        </Link>
        <Link
          className="delete-btn"
          onClick={() => handleDeletePaint(idx)}
        >
        REMOVE
        </Link>
      </div>
      <br></br>
    </React.Fragment>
  );
};
 
export default Paint;
