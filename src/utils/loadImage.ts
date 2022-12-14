export const loadImage = (image: string) => {
    return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () => resolve(image);
        loadImg.onerror = (err) => reject(err);
    });
};
