import React, { useRef } from 'react';

export default ({ onChange }) => {
    const fileInput = useRef(null);

    return (
        <div className='UploadBtn'>
            <input type='file' ref={fileInput} onChange={onChange} />
            <button onClick={() => fileInput.current.click()} className="btn btn-primary">Upload an image</button>
        </div>
    )
};
