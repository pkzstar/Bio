import React, { useState } from 'react';

function OpenDeskTopItem({ id, onClose }) {
  if (!id) return null;

  const renderContent = () => {
    switch (id) {
      case 'iconsPlus':
        return <p>This is the Plus icon window.</p>;
      case 'iconsDesk':
        return <p>This is the Desk icon window.</p>;
      // Add more cases here for additional icons
      default:
        return <p>Unknown window.</p>;
    }
  };

  return (
    <div className="iconPopUp">
      <div className="popupHeader">
        <span>{id}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className="popupContent">
        {renderContent()}
      </div>
    </div>
  );
}

function DeskTopIcons({ onIconClick }) {
  return (
    
    <div className="deskTopIconsCont">
      <img
        id="iconsPlus"
        className="deskTopIcons"
        src="https://pbs.twimg.com/profile_images/1239961234868514816/yzD-YDss_400x400.png"
        alt="Plus Icon"
        onClick={(e) => onIconClick(e.target.id)}
      />
      <img
        id="iconsDesk"
        className="deskTopIcons"
        src="https://github.com/pkzstar/Bio/blob/main/Bio/src/assets/starslogo.png?raw=true"
        alt="Desk Icon"
        onClick={(e) => onIconClick(e.target.id)}
      />
    </div>
  );
}

export default function DesktopInterface() {
  const [activeWindow, setActiveWindow] = useState(null);

  const handleIconClick = (id) => {
    setActiveWindow(id);
  };

  const handleCloseWindow = () => {
    setActiveWindow(null);
  };

  return (
    <div>
      <DeskTopIcons onIconClick={handleIconClick} />
      <OpenDeskTopItem id={activeWindow} onClose={handleCloseWindow} />
    </div>
  );
}
