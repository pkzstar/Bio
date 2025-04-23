import React from 'react';

function PlusSide({ onIconClick }) {
  return (
    <img
      className='deskTopIcons'
      src="https://pbs.twimg.com/profile_images/1239961234868514816/yzD-YDss_400x400.png"
      alt="Desktop Icon"
      onClick={onIconClick}
    />
  );
}

export default PlusSide;
