import React, { useState } from 'react';
import './Progressbar.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

const App = () => {
  const [progress, setProgress] = useState(50);
 

  const increaseProgress = () => {
    setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 100));
  };

  const decreaseProgress = () => {
    setProgress((prevProgress) => (prevProgress > 0 ? prevProgress - 10 : 0));
  };

  return (
    
      
      <div className="App">
      <ProgressBar progress={progress} />
      <button onClick={increaseProgress}>Increase</button>
      <button onClick={decreaseProgress}>Decrease</button>
    </div>
  
  );
};

export default App;