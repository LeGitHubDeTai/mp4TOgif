const dotenv = require('dotenv');
const child_process = require('child_process');

dotenv.config();

child_process.exec(`ffmpeg -i ${process.env.inMP4} ${process.env.outGIF}`, (err, stdout) => {
    console.log(err, stdout);
});