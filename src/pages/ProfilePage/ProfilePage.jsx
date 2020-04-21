import React from 'react';
import './ProfilePage.css';

const ProfilePage = (props) => {
  return (
    <div>
      <center>
        <div className="title">
          <h2>Profile</h2>
        </div>
        <h3>Thank you for using Battle Brush, {props.user.name}!</h3>
        <p>The email that you used to sign up with us is {props.user.email}.</p>
      </center>
    </div>
  );
};
 
export default ProfilePage;
