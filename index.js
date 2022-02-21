const dotenv = require('dotenv');
const child_process = require('child_process');
var ffmpeg = require('ffmpeg');

dotenv.config();

child_process.exec(`ffmpeg -i ${process.env.inMP4} ${process.env.outGIF}`, (err, stdout) => {
    console.log(err, stdout);
});