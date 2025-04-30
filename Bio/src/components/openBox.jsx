import { useState, useEffect, useRef } from 'react';

export default function OpenBox({ id, removeBox }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
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
        <button
          onClick={() => removeBox(id)}
          style={{
            border: '3px solid white',
            background: 'violet',
            fontWeight: 'bold',
            cursor: 'pointer',
            margin: '-7% 0% 0 100%',
          }}
        >
          ×
        </button>
      </div>

      {/* Tab buttons */}
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <button className='cursorBtn'
          onClick={() => setSelectedTab('tab1')}
          style={{
            flex: 1,
            padding: '5px',
            backgroundColor: selectedTab === 'tab1' ? 'lightgreen' : 'white',
            border: '1px solid black',
          }}
        >
          Tab 1
        </button>
        <button className='cursorBtn'
          onClick={() => setSelectedTab('tab2')}
          style={{
            flex: 1,
            padding: '5px',
            backgroundColor: selectedTab === 'tab2' ? 'lightgreen' : 'white',
            border: '1px solid black',
          }}
        >
          Tab 2
        </button>
        <button className='cursorBtn'
          onClick={() => setSelectedTab('tab3')}
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

      {/* Tab content */}
      <div style={{ marginTop: '10px' }}>
        {selectedTab === 'tab1' && <>
        <p>plusside.net serves as a community calendar for the Esorts scene "Project M/+".</p>
        
        <p>This project has been my Project since day one of trying to learn to become a devloper, </p>
        </>}
        {selectedTab === 'tab2' && <p>This is content for Tab 2</p>}
        {selectedTab === 'tab3' && <p>This is content for Tab 3</p>}
      </div>
    </div>
  );
}
