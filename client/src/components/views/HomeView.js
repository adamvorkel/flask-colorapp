import React from 'react';

import Palette from '../Palette';
import FileUpload from '../FileUpload';

const HomeView = () => {
    // todo - logic to send file to server
    const doUpload = (img) => {
        alert("UPLOAD");
    };

    let samplePalette = ['e63946', 'f1faee', 'a8dadc', '457b9d', '1d3557'];

    return (
        <div className="splash">
            <div className="container">
                <div className="PaletteTool">
                    <div>
                        <h1>Pull a Color Palette from an image</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corporis veniam expedita alias. Nobis ullam eum nesciunt voluptatem culpa veritatis.</p>
                        <FileUpload doUpload={doUpload} />
                    </div>
                    <div>
                        {/* {file && <ImageThumb image={file} />} */}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeView;