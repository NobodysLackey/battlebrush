import React from 'react';
import './ProfilePage.css';

const ProfilePage = (props) => {
  return (
    <div>
      <center>
        <div className="title">
          <h2>User Profile</h2>
        </div>
        <h3>Thank you for using Battle Brush, {props.user.name}!</h3>
        <p>User Email<br></br>
        <span className="email">{props.user.email}</span></p>
        <p>Total Paints<br></br>
        <span className="count">{props.paints.length}</span></p>
      </center>
    </div>
  );
};
 
export default ProfilePage;
