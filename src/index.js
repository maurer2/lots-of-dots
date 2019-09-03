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
      .then((dataParsed) => {
        console.error(dataParsed);
      })
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error));
