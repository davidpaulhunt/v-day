import React from "react";
import Gallery from "components/Gallery";
import HappyAnniversary from "components/HappyAnniversary";
import Highlights from "components/Highlights";
import Letter from "components/Letter";
import MusicPlayer from "components/MusicPlayer";

import "./App.css";

function App() {
  return (
    <div className="container flex flex-col gap-y-6">
      <HappyAnniversary />
      
      <MusicPlayer />

      <Highlights />

      <Gallery />

      <Letter />

      <div>
        <h1 className="text-2xl"><span className="text-green-300">♥️</span> David x Stevie <span className="text-yellow-300">♥️</span></h1>
        <h3 className="text-xl">since 2023</h3>
      </div>
    </div>
  );
}

export default App;
