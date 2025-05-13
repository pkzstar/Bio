import React, { useRef, useEffect } from 'react';

const BackgroundToggle = ({ mode, setMode }) => {
  const iconRef = useRef(null);
  const isAnimating = useRef(false);

  const handleClick = () => {
    if (isAnimating.current) return;

    const icon = iconRef.current;
    if (!icon) return;

    isAnimating.current = true;
    icon.classList.add('animate');

    icon.addEventListener(
      'animationend',
      () => {
        icon.classList.remove('animate');
        setMode(prev => (prev === 'light' ? 'dark' : 'light'));
        isAnimating.current = false;
      },
      { once: true }
    );
  };


  // not working properly yet

  // useEffect(() => {
  //   const footer = document.querySelector('.footerContainer');
  //   if (!footer) return;

  //   footer.style.backgroundColor = mode === 'dark' ? 'purple' : 'palevioletred';
  // }, [mode]);

  return (
    <img
      id="modeIcon"
      ref={iconRef}
      src={
        mode === 'light'
          ? 'https://github.com/pkzstar/Bio/blob/main/Bio/src/assets/zzz.png?raw=true'
          : 'https://github.com/pkzstar/Bio/blob/main/Bio/src/assets/sunrise.png?raw=true'
      }
      alt="Toggle Background"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default BackgroundToggle;
