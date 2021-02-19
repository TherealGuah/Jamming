import React from 'react';
// React Components
import { TrackList } from '../TrackList/TrackList';
//CSS styles
import './PlayList.css';

export class PlayList extends React.Component {

    render() {

        return (

            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <!-- Add a TrackList component -->
                <TrackList />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>

        );

    }

}