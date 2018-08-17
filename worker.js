addEventListener('message', (d) => {
   const imageData = d.data;
   const width = imageData.width;
   const height = imageData.height;
   const data = imageData.data;

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let index = (x + (y * width)) * 4;
            data[index + 3] = 127; //for opacity
            //data[index] = data[index] * 1.2 //for red effect
        }
    }
    postMessage(imageData, [imageData.data.buffer]); //post back imageData along with bit.
});