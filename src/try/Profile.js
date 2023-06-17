import React from 'react';
import './css/profile.css';
import Ripu from './img/Ripukesh.png'

const Profile = () => {
  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <img className="profile-image" src={Ripu} alt="Profile" />
      <h2 className="profile-name"><span>User Name</span> : Ripukesh870</h2>
      <p className="profile-details"><span>Email</span> : user@example.com</p>
      <p className="profile-details"><span>Address </span>: City, Country</p>
      <p className="profile-details"><span>About Me</span> : Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};
export default Profile;
