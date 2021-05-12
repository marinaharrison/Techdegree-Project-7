import React from 'react';
import { withRouter } from 'react-router-dom';
import NotFound from './NotFound';
import Photo from './Photo';

const PhotoContainer = (props) => {


//function below iterates through each photo in the array and interpolates the value of the photo server and photo id
    let photos = props.data.map (photo => 
        <Photo
            url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            key={photo.id}
        />
    );

//this will return the photos into the photo containter, loads them into the ul
return(
<div className="photo-container">
    {(props.loading) ? <p>Loading</p> :
    (!props.data.length && !props.loading) ? <NotFound/> :
    <div>
        <h2> Results: {props.title} </h2>
        <ul> {photos} </ul>
    </div>
    }
</div>
);
}

export default withRouter(PhotoContainer);