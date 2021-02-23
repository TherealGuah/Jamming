import React from 'react';
// React Components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
import Spotify from '../../util/Spotify';
// CSS Styles
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let results = this.state.searchResults;
    // returns the track back to the searchResults array
    results.unshift(track);

    /* removes the event target track from playlistTracks*/
    tracks = tracks.filter(tracksItem => tracksItem.id !== track.id);

    
    
    
    //updates the state of playlistTracks and searchResults
    this.setState( {playlistTracks: tracks, searchResults: results} )
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    let results = this.state.searchResults;
      /* checks if the track.id targeted by event is equal to any of the savedTracks.id
          if so doesn't return anything */
      if(tracks.find(savedTrack => savedTrack.id === track.id) ) {
        return;
      }
      // adds track to playlistTracks
      tracks.push(track);
      // returns only the tracks that are diferent from track
      results = results.filter(results => results.id !== track.id);

      //updates the state of playlistTracks and searchResults
      this.setState( {playlistTracks: tracks, searchResults: results} )

  } 

  updatePlaylistName(name) {
    this.setState( {playlistName: name} );
  }

  savePlaylist() {
    //alert('Is working!');
    const trackUris = this.state.playlistTracks.map(track =>  track.uri);
    //console.log(trackUris);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then( () => {
      this.setState({ 
        playlistName: '',
        playlistTracks: []
      });
    })

  }

  search(term) {
    //console.log(term);
    Spotify.search(term).then( searchResults => {
      this.setState({ searchResults: searchResults })
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar 
            onSearch={this.search}
          />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack}
            />
            <PlayList 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }


}

export default App;