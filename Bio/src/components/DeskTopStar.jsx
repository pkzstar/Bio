import React from 'react';

function DeskTopStar({ onIconClick }) {
  return (
    <img
      className='deskTopIcons'
      src="https://github.com/pkzstar/Bio/blob/main/Bio/src/assets/starlogo.png?raw=true"
      alt="Desktop Icon"
      onClick={onIconClick}
    />
  );
}

export default DeskTopStar;



