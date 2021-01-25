import React from 'react';

import HomeView from './components/views/HomeView';
import PaletteGeneratorView from './components/views/PaletteGeneratorView';

const App = () => {
  return (
    <div className="App">
      <HomeView />
      <PaletteGeneratorView />
    </div>
  );
}

export default App;
