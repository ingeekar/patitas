import React from 'react';

const NotFound = () => {
    return (
        <div className="NotFound">
            <div className="NotFound-container">
                <div className="NotFound-content">
                    <h3>Algo salio mal...</h3>
                    <div style="width:100%;height:0;padding-bottom:101%;position:relative;">
                        <iframe src="https://giphy.com/embed/51Uiuy5QBZNkoF3b2Z" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen>
                        </iframe>
                    </div>
                    <p><a href="https://giphy.com/gifs/mrw-boy-51Uiuy5QBZNkoF3b2Z">via GIPHY</a></p>
                </div>
            </div>
        </div>
    )
}

export default NotFound;