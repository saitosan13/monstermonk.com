// components/AIArtGenerator/AIArtGenerator.js

import React, { useState } from 'react';

const AIArtGenerator = () => {
  const [art, setArt] = useState(null);

  const generateArt = async () => {
    const response = await fetch('/api/generateArt');
    const data = await response.json();
    setArt(data.image);
  };

  return (
    <div>
      <h2>AI Art Generator</h2>
      <button onClick={generateArt}>Generate Art</button>
      {art && <img src={art} alt="Generated Art" />}
    </div>
  );
};

export default AIArtGenerator;
