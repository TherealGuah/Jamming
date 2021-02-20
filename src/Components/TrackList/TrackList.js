import React from 'react';
// CSS styles
import './TrackList.css';
// React Components
import Track  from '../Track/Track'


class TrackList extends React.Component {

    render() {
        
        return (

            <div className="TrackList">
                {
                    this.props.tracks.map( track => {
                        return <Track track={track} key={track.id} onAdd={this.props.onAdd}/>
                    })
                }
            </div>

        );

    }

} 

export default TrackList;