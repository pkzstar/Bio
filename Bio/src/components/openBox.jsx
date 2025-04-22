import { useState, useEffect, useRef } from 'react';

export default function OpenBox({ id, removeBox }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

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
        cursor: isDragging ? 'grabbing' : 'grab',
        border: '1px solid black',
        backgroundColor: 'lightblue',
        padding: '10px',
        width: '200px',
        userSelect: 'none',
        zIndex: 1000,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>Drag me around!</strong>
        <button onClick={() => removeBox(id)} style={{
          border: 'none',
          background: 'transparent',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}>×</button>
      </div>
    </div>
  );
}
