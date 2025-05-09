import React, { useEffect, useRef, useState } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasLoadedSetting, setHasLoadedSetting] = useState(false);

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem('backgroundMusic');
    if (saved === 'true') {
      setIsPlaying(true);
    }
    setHasLoadedSetting(true);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!hasLoadedSetting) return;

    if (isPlaying) {
      audio.play().catch((e) => {
        console.warn('Autoplay blocked:', e);
        setIsPlaying(false); // Revert UI if autoplay is blocked
      });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    localStorage.setItem('backgroundMusic', isPlaying);
  }, [isPlaying, hasLoadedSetting]);

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div>
      <audio ref={audioRef} loop>
      <source src="https://github.com/pkzstar/Bio/raw/refs/heads/main/Bio/public/sounds/03.%20Save%20Theme.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
      </audio>
      <button className='musicBtn' onClick={toggleMusic} style={{ padding: '8px 12px', borderRadius: '6px' }}>
        {isPlaying ? 'Turn Music Off' : 'Turn Music On'}
      </button>
    </div>
  );
};

export default BackgroundMusic;
