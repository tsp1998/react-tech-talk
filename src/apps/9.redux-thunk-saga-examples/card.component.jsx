import React from 'react'

import profileImage from './assets/profile.png';

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={profileImage} alt="profileImage" />
      </div>
      <div className="card-name">Shubham</div>
      <div className="card-email">shubham@mail.com</div>
      <div className="card-phone">1655356255643</div>
    </div>
  )
}

export default Card
