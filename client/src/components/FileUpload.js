import React, { useRef, useState } from 'react';
import ImageThumb from './ImageThumb';

const FileUpload = ({ doUpload }) => {
    const [file, setFile] = useState('');
    const fileInput = useRef(null);

    const handleFileUpload = (e) => {
        setFile(e.target.files[0]);
        doUpload(file);
    }


    return (
        <div className='UploadBtn'>
            <input type='file' ref={fileInput} onChange={handleFileUpload} />
            <button onClick={() => fileInput.current.click()} className="btn btn-primary">Upload an image</button>
        </div>
    )
};

export default FileUpload;