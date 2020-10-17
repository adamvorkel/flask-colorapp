import React from 'react';

export default ({ colors }) => {
    const copyToClipboard = (color) => {
        navigator.clipboard.writeText(color);
    }

    return (
        <div className='Palette'>
            {colors.map((color) => (
                <div key={color} style={{backgroundColor: `#${color}`}} onClick={() => copyToClipboard(color)}>
                    <span>{color}</span>
                </div>
            ))}
        </div>
    )
};
