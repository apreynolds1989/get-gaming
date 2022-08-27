// importAll() and require.context was found by searching how to import all photos
// from a file in React. I followed this information:
// https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b
const importAll = (arrayOfFiles) => {
    let images = {};
    arrayOfFiles.keys().forEach((item, index) => {
        images[item.replace('./', '')] = arrayOfFiles(item);
    });
    return images;
};

export const EventOneImages = importAll(require.context('./photos/Aug26-2022', false, /\.(png|jpe?g|svg)$/), 'lazy');

export const EventOneImageNames = Object.keys(EventOneImages);