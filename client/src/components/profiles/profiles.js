import React from 'react';

const Profiles = () => {
    return (
      <div className='userContainer'>
        <div className='avatar'>
          <img alt='avatar' src='/images/avatar.png'></img>
        </div>
        <div className='info'>
          <div>
            <span>Name:</span>name
          </div>
          <div>
            <span>LastName:</span>lastname
          </div>
          <div>
            <span>Email:</span>email
          </div>
        </div>
      </div>
    );
};

export default Profiles;