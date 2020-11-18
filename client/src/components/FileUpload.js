import React, { useRef, useState, useEffect } from 'react';
import ImageThumb from './ImageThumb';

import paletteGenerator from '../paletteGenerator';

const loadImage = (url) => {
    return new Promise((res, rej) => {
        const image = new Image();
        image.addEventListener('load', () => res(image));
        image.src = url;
    })
}

const FileUpload = () => {
    const [file, setFile] = useState('');
    const fileInput = useRef(null);
    const image = React.createRef();

    // useEffect(() => {
    //     const doLoad = async (file) => {
    //         let url = URL.createObjectURL(file);
    //         let img = await loadImage(url);
    //         let palette = paletteGenerator(img);
    //         console.log("PALETTE: ", palette)
    //         URL.revokeObjectURL(url);
    //     };
    //     if(file) {
    //         doLoad(file);
    //     }
    // }, [file]);

    const getPalette = () => {
        let palette = paletteGenerator(image.current);
        console.log("PALETTE: ", palette)
    }


    return (
        <div className='UploadBtn'>
            {/* {image && <ImageThumb image={image} />} */}
            {file && <img ref={image} onLoad={getPalette} src={URL.createObjectURL(file)} alt={'test'} />}
            <input type='file' ref={fileInput} onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={() => fileInput.current.click()} className="btn btn-primary">Upload an image</button>
        </div>
    )









































































    
};

export default FileUpload;