import React, { useState } from 'react';

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



function OpenDeskTopItem({ id, onClose }) {
  if (!id) return null;

  const renderContent = () => {
    switch (id) {
      case 'iconsPlus':
        return <div>
       <>
        <a href="http://www.plusside.net"  target="_blank" rel="noopener noreferrer"><img className='tabBanner' src="https://github.com/pkzstar/Bio/blob/main/Bio/src/assets/plusside-logo.jpg?raw=true" alt="" /></a>
        <p>plusside.net serves as a community calendar for the Esports scene "Project&nbsp;M/+".</p>
        <p>This project has been my primary learning project since day one of trying to become a developer, and it's one I intend to return to as my skills develop further over time.</p>
        <p> This project is primarily built with JS, HTML, CSS and some bootstrap but I am currently working to transfer this over to react and would like to pull data from tournaments for results automatically</p>
        </>
      </div>;
      case 'iconsDesk':
        return <div>
       <>
        <a href="/"  target="_blank" rel="noopener noreferrer"><img className='tabBanner' src="https://static.vecteezy.com/system/resources/previews/011/628/869/non_2x/cute-cartoon-world-space-day-background-free-vector.jpg" alt="" /></a>
        <p>This is the site You are currently on!</p>
        <p>I am hoping to use this in the future to showcase future projects as well as maybe cloning it to use as a hub to list useful pages for the Esports scene "Project M/+</p>
        </>
      </div>;
      // Add more cases here for additional icons
      default:
        return <p>Unknown window.</p>;
    }
  };

  return (
    <div  className="iconPopUp boxContainer">
      <div className='xButtonMargin' style={{ display: 'flex', justifyContent: 'space-between' }}>
      <button className='xButton' 
      onClick={() => {
        playClickSoundClose();
        onClose();
      }}
      
      >x</button>
      </div>
              
        {/* <span>{id}</span> */}
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
        onClick={(e) => {
          playClickSound();
          onIconClick(e.target.id)}}
      />
      <img
        id="iconsDesk"
        className="deskTopIcons"
        src="https://github.com/pkzstar/Bio/blob/main/Bio/src/assets/starslogo.png?raw=true"
        alt="Desk Icon"
        onClick={(e) => {
        playClickSound();
        onIconClick(e.target.id)}
        }
        
      />
            <img
        id="iconsRecycle"
        className="deskTopIcons"
        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEyL3Jhd3BpeGVsb2ZmaWNlMl9hX2hhbmQtZHJhd25fZW52aXJvbm1lbnRhbF9pY29uX2Rvb2RsZV9zdHlsZV9mZV8zYWQwNDliMC1mZDgxLTRlOGItYmUwYy1iMTdjZmVjNDA5MWMtbTRtaWE0MjUucG5n.png"
        alt="Desk Icon"
        onClick={(e) => {
          playClickSound();
          onIconClick(e.target.id)}
          }
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
      <audio id="click-sound" src="https://github.com/pkzstar/Bio/raw/refs/heads/main/Bio/public/sounds/mouseclick2.mp3" preload="auto" />
      <audio id="click-sound-close" src="https://github.com/pkzstar/Bio/raw/refs/heads/main/Bio/public/sounds/mouse-click-290204.mp3" preload="auto" />

      <DeskTopIcons onIconClick={handleIconClick} />
      <OpenDeskTopItem id={activeWindow} onClose={handleCloseWindow} />
    </div>
  );
}
