import React from 'react';
import './ProfilePage.css';

const ProfilePage = (props) => {
  return (
    <div>
      <center>
        <h3 className="title">Thank you for using Battle Brush, {props.user.name}!</h3>
        <p>Email: {props.user.email}</p>
      </center>
    </div>
  );
};
 
export default ProfilePage;
