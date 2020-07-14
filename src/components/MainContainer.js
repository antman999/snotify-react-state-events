import React from 'react';
import SongList from './SongList';
import Queue from './Queue';


// renderSongs = (songs) => {
//     let songsList = songs;
//     return songsList
//   }

const MainContainer = props => {
    console.log(props.songs)
    return (
        <div className="simple-flex-row top">
           
             <SongList 

                songs={props.songs}
                handleFav={props.handleFav}
                />
        
           
            <Queue /> 
        </div>
    )
}

export default MainContainer;