import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import Background from './components/Background';
import OpenBox from './components/openBox';

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
      <img className='deskTopIcons' src="https://pbs.twimg.com/profile_images/1239961234868514816/yzD-YDss_400x400.png" alt="" />
      <Footer toggleBox={addBox} />

      {boxes.map(box => (
        <OpenBox key={box.id} id={box.id} removeBox={removeBox} />
      ))}
    </>
  );
}

export default App;
