import React from 'react';

function DeskTopIcons({ onIconClick }) {
  return (
    <div className='deskTopIconsCont'>
        <img
      className='deskTopIcons'
      src="https://pbs.twimg.com/profile_images/1239961234868514816/yzD-YDss_400x400.png"
      alt="Desktop Icon"
      onClick={onIconClick}
    />

    <img
    className='deskTopIcons'
    src="https://github.com/pkzstar/Bio/blob/main/Bio/src/assets/starslogo.png?raw=true"
    alt="Desktop Icon"
    onClick={onIconClick}
  />
    </div>

  );
}

export default DeskTopIcons;
