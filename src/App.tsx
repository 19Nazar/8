import { useState } from 'react'

import './App.css'

function App() {
  const [showBackground, setShowBackground] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonWidth = 100; // Ширина кнопки
  const buttonHeight = 50; // Высота кнопки
  
  const moveButton = () => {
    const newMaxX = window.innerWidth - buttonWidth;
    const newMaxY = window.innerHeight - buttonHeight;
    const newPosX = Math.floor(Math.random() * newMaxX);
    const newPosY = Math.floor(Math.random() * newMaxY);
    setPosition({ x: newPosX, y: newPosY });
  };

  const handlYes = () => {
    setShowBackground(!showBackground);
  };

  if(showBackground){
    return(
      <>
        {showBackground && 
        <div className="background">
        <div className='da'>
          <div className='battom'>
            <img src="../public/Без названия.jpg" alt="Buket" />            
          </div>
          <h2 className='congratulete'>Dear Elizabeth Anatolyevna, I congratulate you on this special day and wish you to remain as inspiring, strong, and beautiful as you are today. May your life be filled with light, joy, and love, and may each day bring only the most pleasant surprises and brightest moments.</h2>
        </div>
        </div>}
      </>
    )
  }

  return (
    <>
      <div className='container'>
        <div>
          <img src="../public/407285596.webp" alt="convert" />
          <h2 className='qwestion'>It's march 8th today?</h2>
          <div className='TapButton'>
            <button onClick={handlYes}>Yes</button>
            <button  
            style={{
            position: 'relative',
            top: `${position.y}px`,
            left: `${position.x}px`,
            padding: '10px 20px',
            cursor: 'pointer',}} 
            onClick={moveButton}
            >No</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
