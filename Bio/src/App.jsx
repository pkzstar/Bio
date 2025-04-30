import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Background from './components/Background';
import OpenBox from './components/openBox';
import PlusSide from './components/PlusSide'; // <-- new import
import DeskTopStar from './components/DeskTopStar';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    const id = Date.now();
    setBoxes(prev => [...prev, { id }]);
  };

  const removeBox = (idToRemove) => {
    setBoxes(prev => prev.filter(box => box.id !== idToRemove));
  };

  return (
    <>
      <Background />
      <PlusSide onIconClick={addBox} /> {/* <-- use new component */}
      <DeskTopStar onIconClick={addBox} />
      <Footer toggleBox={addBox} />

      {boxes.map(box => (
        <OpenBox key={box.id} id={box.id} removeBox={removeBox} />
      ))}
    </>
  );
}

export default App;
