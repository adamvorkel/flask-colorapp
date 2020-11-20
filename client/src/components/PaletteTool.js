import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import paletteGenerator from '../paletteGenerator';

import Palette from './Palette';

// colors: array with rgb elements (3 decimal numbers in 0 - 255)
// returns hex string representation (prepended with #)
const rbgToHex = (colors) => {
    return '#' + colors
    .map(c => {
        let hex = c.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    })
    .join('');
}

const PaletteTool = () => {
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState(null);
    const [palette, setPalette] = useState([]);
    const [loading, setLoading] = useState(false);
    const fileInput = useRef(null);
    const image = useRef(null);
    const imageOverlay = useRef(null);

    const onImageLoad = () => {
        const getPalette = async (image) => {
            let p = await paletteGenerator(image);
            setPalette(p);
        }
        setLoading(false);
        imageOverlay.current.classList.remove('show');
        getPalette(image.current);
    }

    useEffect(() => {
        setPalette([]);
        if(file) {
            setLoading(true);
            imageOverlay.current.classList.add('show');
            const objectURL = URL.createObjectURL(file);
            setUrl(objectURL);
            return () => URL.revokeObjectURL(objectURL);
        }
    }, [file]);

    return (
        <div className="PaletteTool">
            <div>
                <h1>Pull a Color Palette from an image</h1>
                <p>Simply upload the image you want to extract a color palette from and we'll generate it for you!</p>
                <input type='file' ref={fileInput} onChange={(e) => setFile(e.target.files[0])} />
                <button onClick={() => fileInput.current.click()} className="btn btn-primary">Upload an image</button>
                
            </div>
                
            <div className='image-container'>
                <div ref={imageOverlay} className="image-overlay">
                    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
                {file && url && <img 
                    ref={image} 
                    onLoad={onImageLoad} 
                    src={url} 
                    alt={file.name} />}
                {palette && <Palette colors={palette.map(c => rbgToHex(c))} />}
            </div>
                
        </div>
    )
};

export default PaletteTool;