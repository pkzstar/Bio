import { useState, useEffect, useRef } from 'react';


const playClickSoundClose = () => {
  const soundClose = document.getElementById("click-sound-close");

  if (soundClose) {
    soundClose.currentTime = 0;
    soundClose.play();
  }
};

const playClickSoundPage = () => {
  const soundPage = document.getElementById("click-sound-page");

  if (soundPage) {
    soundPage.currentTime = 0;
    soundPage.play();
  }
};

export default function OpenBox({ id, removeBox }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 950, y: 250 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [selectedTab, setSelectedTab] = useState('tab1'); // Track the selected tab

  const boxRef = useRef(null);

  const handleMouseDown = (e) => {
    const rect = boxRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);

  return (
    
    <div
      ref={boxRef}
      className="boxContainer"
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        border: '1px solid black',
        backgroundColor: 'lightblue',
        padding: '10px',
        width: '300px',
        userSelect: 'none',
        zIndex: 1000,
      }}
    >
      {/* Header with tab navigation and close button */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button className='xButton'
          onClick={() => {
            playClickSoundClose();
            removeBox(id)}
          }
          
          >
          x
        </button>
      </div>

      {/* Tab buttons */}
      <div style={{ display: 'flex', marginTop: '10px' }}>
      <audio id="click-sound-page" src="https://github.com/pkzstar/Bio/raw/refs/heads/main/Bio/public/sounds/page-turn02-103822.mp3" preload="auto" />
        <button className='tabButtons'
          onClick={() => {
            playClickSoundPage();
            setSelectedTab('tab1');
          }}
          style={{
            flex: 1,
            padding: '5px',
            backgroundColor: selectedTab === 'tab1' ? 'lightgreen' : 'white',
            border: '1px solid black',
          }}
        >
          Plus Side
        </button>
        <button className='tabButtons'
          onClick={() => {
            playClickSoundPage();
            setSelectedTab('tab2');
          }}
          style={{
            flex: 1,
            padding: '5px',
            backgroundColor: selectedTab === 'tab2' ? 'lightgreen' : 'white',
            border: '1px solid black',
          }}
        >
          Desktop Hub
        </button>
        <button className='tabButtons'
          onClick={() => {
            playClickSoundPage();
            setSelectedTab('tab3');
          }}
          style={{
            flex: 1,
            padding: '5px',
            backgroundColor: selectedTab === 'tab3' ? 'lightgreen' : 'white',
            border: '1px solid black',
          }}
        >
          Tab 3
        </button>
      </div>

      {/* tab 1 */}
      <div style={{ marginTop: '10px' }}>
        {selectedTab === 'tab1' && <>
        <a href="http://www.plusside.net"  target="_blank" rel="noopener noreferrer"><img className='tabBanner' src="https://github.com/pkzstar/Bio/blob/main/Bio/src/assets/plusside-logo.jpg?raw=true" alt="" /></a>
        <p>plusside.net serves as a community calendar for the Esorts scene "Project&nbsp;M/+".</p>

        <p>This project has been my primary learning project since day one of trying to become a developer, and it's one I intend to return to as my skills develop further over time.</p>
        <p> This project is primarily built with JS, HTML, CSS and some bootstrap but I am currently working to transfer this over to react and would like to pull data from tournaments for results automatically</p>
        </>}
      </div>

      {/* tab 2 */}
      <div style={{ marginTop: '10px' }}>
        {selectedTab === 'tab2' && <>
        <a href="/"  target="_blank" rel="noopener noreferrer"><img className='tabBanner' src="https://static.vecteezy.com/system/resources/previews/011/628/869/non_2x/cute-cartoon-world-space-day-background-free-vector.jpg" alt="" /></a>
        <p>This is the site You are currently on!</p>
        <p>I am hoping to use this in the future to showcase future projects as well as maybe cloning it to use as a hub to list useful pages for the Esports scene "Project M/+</p>

      
        </>}
        {selectedTab === 'tab3' && <p>This is content for Tab 3</p>}
      </div>

    </div>
  );
}
