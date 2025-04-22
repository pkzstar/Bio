import { useState, useEffect, useRef } from 'react';

export function Footer({ toggleBox }) {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);

  const handleClick = () => {
    setShowOptions(prev => !prev);
  };

  const handleOptionClick = (callback) => {
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
      <img
        className="startBtn"
        src="https://images.vexels.com/media/users/3/211367/isolated/preview/2747cfb9e3b7520b0d6a1a55b84224ee-magic-crescent-moon-icon.png"
        alt="Magic Moon Icon"
        onClick={handleClick}
      />

      {showOptions && (
        <div ref={optionsRef} className="optionsBox">
          <p
            id="openBox"
            className="options"
            onClick={() => handleOptionClick(toggleBox)}
          >
            Windows
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
