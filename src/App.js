import React from "react";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

import "./App.module.css";

function App() {
  return (
    <div className="App">
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App-playlist">
        <SearchBar />
        <div className="App-playlist-wrapper">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
