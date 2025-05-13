import React, { useEffect, useRef, useState } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasLoadedSetting, setHasLoadedSetting] = useState(false);
  const [volume, setVolume] = useState(0.5); // Default volume at 50%

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

    audio.volume = volume; // Set volume when state changes

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

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className='musicContainer' style={{ position: 'relative' }}>
      <audio ref={audioRef} loop>
        <source
          src="https://github.com/pkzstar/Bio/raw/refs/heads/main/Bio/public/sounds/03.%20Save%20Theme.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <button
        className="musicBtn"
        onClick={toggleMusic}
        style={{ padding: '8px 12px', borderRadius: '6px' }}
      >
        {isPlaying ? 'Turn Music Off' : 'Turn Music On'}
      </button>

      {/* Volume Bar */}
      {isPlaying && (
        <input className='volumeSlider'
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          style={{
            marginLeft: '10px',
            verticalAlign: 'middle',
            width: '120px'
          }}
        />
      )}
    </div>
  );
};

export default BackgroundMusic;
