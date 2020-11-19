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
    const [file, setFile] = useState('');
    const [url, setUrl] = useState('');
    const [palette, setPalette] = useState([]);
    const fileInput = useRef(null);
    const image = React.createRef();

    const onImageLoad = () => {
        const getPalette = async (image) => {
            let p = await paletteGenerator(image);
            setPalette(p);
        }
        getPalette(image.current);
    }

    useEffect(() => {
        if(file) {
            const objectURL = URL.createObjectURL(file);
            setUrl(objectURL);
            return () => {
                console.log("REVOKING IMAGE URL...")
                URL.revokeObjectURL(objectURL)
            };
        }
    }, [file]);

    return (
        <div className="PaletteTool">
            <div>
                <h1>Pull a Color Palette from an image</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corporis veniam expedita alias. Nobis ullam eum nesciunt voluptatem culpa veritatis.</p>
                <input type='file' ref={fileInput} onChange={(e) => setFile(e.target.files[0])} />
                <button onClick={() => fileInput.current.click()} className="btn btn-primary">Upload an image</button>
            </div>
                
            <div className='image-container'>
                {url && <img 
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