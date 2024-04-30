import React from 'react'
import './profile.css'
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  return (
    <div className='pro-container'>
      <div className='pro-top-container'>
          <div className='pro-profile'>
            <CgProfile />
          </div>

      </div>
      <div className='pro-bottom-container'>

      </div>
    </div>
  )
}

export default Profile