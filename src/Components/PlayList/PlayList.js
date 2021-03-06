import React from 'react';
// React Components
import TrackList from '../TrackList/TrackList';
//CSS styles
import './PlayList.css';

class PlayList extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        let newName = e.target.value;
        this.props.onNameChange(newName);
    }

    render() {

        return (

            <div className="Playlist">
                <input defaultValue={this.props.playlistName} onChange={this.handleNameChange}/>
                <TrackList 
                    tracks={this.props.playlistTracks}
                    onRemove={this.props.onRemove}
                    isRemoval={true}/>
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>

        );

    }

}

export default PlayList;