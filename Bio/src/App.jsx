import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Background from './components/Background';
import OpenBox from './components/openBox';
import DeskTopIcons from './components/DesktopInterface';
import BackgroundMusic from './components/BackgroundMusic';
import BackgroundToggle from './components/BackgroundToggle'; // you can remove ModeToggle if not using it

function App() {
  const [mode, setMode] = useState('light');
  const [boxes, setBoxes] = useState([]);

  const addBox = (iconId) => {
    const uniqueKey = `${iconId}-${Date.now()}`;
    setBoxes(prev => [...prev, { key: uniqueKey, type: iconId }]);
  };

  const handleIconClick = (e) => {
    const iconId = e.target.id;
    addBox(iconId);
  };

  const removeBox = (keyToRemove) => {
    setBoxes(prev => prev.filter(box => box.key !== keyToRemove));
  };

  return (
    <>
      <div className={mode}>
        <BackgroundToggle mode={mode} setMode={setMode} />
        <Background mode={mode} />
      </div>

      <BackgroundMusic />
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
