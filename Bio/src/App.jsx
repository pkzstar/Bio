import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Background from './components/Background';
import OpenBox from './components/openBox';
import DeskTopIcons from './components/DesktopInterface';


function App() {
  const [boxes, setBoxes] = useState([]);

  // Adds a box with a unique key and the icon type
  const addBox = (iconId) => {
    const uniqueKey = `${iconId}-${Date.now()}`;
    setBoxes(prev => [...prev, { key: uniqueKey, type: iconId }]);
  };

  // Handles click on desktop icons
  const handleIconClick = (e) => {
    const iconId = e.target.id;
    addBox(iconId);
  };

  // Removes a box by its unique key
  const removeBox = (keyToRemove) => {
    setBoxes(prev => prev.filter(box => box.key !== keyToRemove));
  };

  return (
    <>


      <Background />
      <DeskTopIcons onIconClick={handleIconClick} />
      <Footer toggleBox={addBox} />

      {boxes.map(box => (
        <OpenBox
          key={box.key}
          id={box.type}
          removeBox={() => removeBox(box.key)}
        />
      ))}
    </>
  );
}

export default App;
