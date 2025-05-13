import React from 'react';
import wallpaperLight from '../assets/wallpaperlight.png';
import wallpaperDark from '../assets/wallpaperdark.jpg';

export function Background({ mode }) {
  const wallpaper = mode === 'light' ? wallpaperLight : wallpaperDark;

  return (
    <div className="footerContainer">
      <img
        id="wallPaper"
        className={mode === 'light' ? 'wallpaperLight' : 'wallpaperDark'}
        src={wallpaper}
        alt={`${mode} wallpaper`}
      />
    </div>
  );
}

export default Background;
