import React from 'react';
import PaintList from '../../components/PaintList/PaintList';

const PaintListPage = (props) => {
  return (
    <PaintList 
      paints = {props.paints}
      handleDeletePaint = {props.handleDeletePaint}
    />
  );
};
 
export default PaintListPage;
