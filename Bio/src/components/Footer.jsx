import { useState, useEffect, useRef } from 'react';




const playClickSound = () => {
  const sound = document.getElementById("click-sound");

  if (sound) {
    sound.currentTime = 0;
    sound.play();
  } 
};

const playClickSoundClose = () => {
  const soundClose = document.getElementById("click-sound-close");

  if (soundClose) {
    soundClose.currentTime = 0;
    soundClose.play();
  }
};

export function Footer({ toggleBox }) {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);

  const handleClick = () => {
    setShowOptions(prev => !prev);
  };

  const handleOptionClick = (callback) => {
    playClickSound();
    setShowOptions(false);     // Close the options box
    if (callback) callback();  // Run any attached functionality (like toggleBox)
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target) &&
        event.target.className !== 'startBtn'
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (

    
    <div className="footerContainer">
          <audio id="click-sound" src="https://github.com/pkzstar/Bio/raw/refs/heads/main/Bio/public/sounds/mouse-click-290204.mp3" preload="auto"></audio>
          <audio id="click-sound-close" src="https://github.com/pkzstar/Bio/raw/refs/heads/main/Bio/public/sounds/mouse-click-290204.mp3" preload="auto"></audio>
<img
  className="startBtn"
  src="https://images.vexels.com/media/users/3/211367/isolated/preview/2747cfb9e3b7520b0d6a1a55b84224ee-magic-crescent-moon-icon.png"
  alt="Magic Moon Icon"
  onClick={() => {
    handleClick();
    playClickSoundClose();
  }}
/>


      {showOptions && (
        <div ref={optionsRef} className="optionsBox">
          <p
            id="openBox"
            className="options"
            onClick={() => handleOptionClick(toggleBox)}
          >
            All Desktop Items
          </p>
          <p
            className="options"
            onClick={() => handleOptionClick()}
          >
            Option 2
          </p>
          <p
            className="options"
            onClick={() => handleOptionClick()}
          >
            Option 3
          </p>
        </div>
      )}
    </div>
  );
}

export default Footer;
