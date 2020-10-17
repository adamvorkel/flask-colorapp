import React from 'react';

import Palette from './components/Palette';
import UploadBtn from './components/UploadBtn';

let samplePalette = ['e63946', 'f1faee', 'a8dadc', '457b9d', '1d3557']

const App = () => {
  return (
    <div className="App">
      <div className="PaletteTool">
        <div>
          <h1>Extract a Color Palette from an image</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corporis veniam expedita alias. Nobis ullam eum nesciunt voluptatem culpa veritatis.</p>
          <UploadBtn />
        </div>
        <Palette colors={samplePalette} />
      </div>
    </div>
  );
}

export default App;
