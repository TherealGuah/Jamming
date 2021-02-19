import React from 'react';
// React Components
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../PlayList/PlayList';
// CSS Styles
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [ 
        { name: 'Beat it', artist: 'Michael Jackson', album: 'Bad', id: 'jdhethdyrk'},
        { name: 'The calling', artist: 'Mandolorian', album: 'This is the way', id: '12kjhaigij' },
        { name: 'I kissed a girl', artist: 'Katy Perry', album: 'Never Forever', id: 'asdpoiwerk' },
        { name: 'The Hearth will go on', artist: 'Celine Dion', album: 'Whatever was', id: 'dksmeutkla' }
      ]
    }
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <!-- Add a SearchBar component -->
          <SearchBar />
          <div className="App-playlist">
            <!-- Add a SearchResults component -->
            <SearchResults />
            <!-- Add a Playlist component -->
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}