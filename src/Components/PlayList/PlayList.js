import React from 'react';
// React Components
import TrackList from '../TrackList/TrackList';
//CSS styles
import './PlayList.css';

class PlayList extends React.Component {

    render() {

        return (

            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <TrackList 
                    tracks={this.props.playlistTracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>

        );

    }

}

export default PlayList;