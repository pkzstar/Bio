import React, { useRef, useState } from 'react';

const ModeToggle = () => {
  const iconRef = useRef(null);
  const [mode, setMode] = useState('light'); // or 'dark'

  const handleClick = () => {
    const icon = iconRef.current;
    if (!icon) return;

    icon.classList.add('animate');

    icon.addEventListener('animationend', () => {
      icon.classList.remove('animate');
      setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    }, { once: true }); // ensures the listener runs only once
  };

  return (
          <img id='modeIcon'       ref={iconRef}
      src={mode === 'light' ? 'https://github.com/pkzstar/Bio/blob/main/Bio/src/assets/sunrise.png?raw=true' : 'https://github.com/pkzstar/Bio/blob/main/Bio/src/assets/zzz.png?raw=true'}
      alt="Toggle Mode"
      onClick={handleClick} />
  );
};

export default ModeToggle;
