import fs from 'fs-extra';
import { PNG } from 'pngjs';
import { rejects } from 'assert';

fs.readFile('./src/stage.png')
  .then((data) => {
    const { length: bytesLoaded } = data;
    console.log(`${bytesLoaded} loaded`);

    const parsedPNG = new Promise((resolve, reject) => {
      new PNG({ filterType: 4 })
        .parse(data, (error, dataParsed) => {
          if (error) {
            reject(error);
          }
          resolve(dataParsed);
        });
    });

    parsedPNG
      .then((pngFile) => {
        console.error(pngFile.data);
        const y = 100;
        for (let x = 0; x < pngFile.width; x++) {
          console.error(pngFile.data[x * y]);
        }

      })
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error));
