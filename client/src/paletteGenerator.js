import MMCQ from './quantize';

const quantize = (pixelArray, nColors) => {
    // todo - median cut algorithm
    const quantize = MMCQ().quantize;
    return quantize(pixelArray, nColors).palette();
}

const paletteGenerator = async (image, nColors) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    const pixelCount = width * height;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);

    const imageData = ctx.getImageData(0, 0, width, height);
    // create pixel array
    const pixelArray = [];
    const pixelData = imageData.data;
    for(let i = 0; i < pixelCount; ++i) {
        let offset = i * 4;
        pixelArray.push([pixelData[offset], pixelData[offset + 1], pixelData[offset + 2], pixelData[offset + 3]])
    }

    return quantize(pixelArray, nColors);
};

export default paletteGenerator;