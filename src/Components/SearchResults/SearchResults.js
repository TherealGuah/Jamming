import React from 'react';
// React Components
import { TrackList } from '../TrackList/TrackList';
// CSS styles
import './SearchResults.css';

export class SearchResults extends React.Component {

    render() {
        
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <!-- Add a TrackList component -->
                <TrackList />
            </div>
        );

    }

}