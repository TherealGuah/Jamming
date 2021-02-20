import React from 'react';
// React Components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
// CSS Styles
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: 'Beat it', artist: 'Michael Jackson', album: 'Bad', id: 1},
        { name: 'The calling', artist: 'Mandolorian', album: 'This is the way', id: 2 },
        { name: 'I kissed a girl', artist: 'Katy Perry', album: 'Never Forever', id: 3 },
        { name: 'The Hearth will go on', artist: 'Celine Dion', album: 'Whatever was', id: 4 }
      ],

      playlistName: 'My Playlist',

      playlistTracks: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 5},
        {name: 'name2', artist: 'artist2', album: 'album2', id: 6}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(tracksItem => tracksItem.id !== track.id);

    this.setState({playlistTracks: tracks})
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
      if(tracks.find(savedTrack => savedTrack.id === track.id) ) {
        return;
      }
      tracks.push(track);
      this.setState({playlistTracks: tracks})
  } 

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack}/>
            <PlayList 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }


}

export default App;