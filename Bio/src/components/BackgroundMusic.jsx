import React, { useEffect, useRef, useState } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(() => {
    const saved = localStorage.getItem('backgroundMusic');
    return saved === 'true'; // convert string to boolean
  });

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play().catch((e) => {
        console.warn('Autoplay blocked or failed:', e);
      });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    localStorage.setItem('backgroundMusic', isPlaying);
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', zIndex: 999 }}>
      <audio ref={audioRef} loop>
        <source src="/path-to-your-music-file.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={toggleMusic} style={{ padding: '8px 12px', borderRadius: '6px' }}>
        {isPlaying ? 'Turn Music Off' : 'Turn Music On'}
      </button>
    </div>
  );
};

export default BackgroundMusic;
