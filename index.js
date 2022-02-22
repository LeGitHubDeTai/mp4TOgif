const fs = require('fs');
const dotenv = require('dotenv');
const child_process = require('child_process');
var pathToFfmpeg = require('ffmpeg-static');

dotenv.config();

if(fs.existsSync(process.env.outGIF)){
    fs.rm(process.env.outGIF, () => {console.log('done');});
}

child_process.exec(`${pathToFfmpeg} -i ${process.env.inMP4} ${process.env.outGIF}`, (err, stdout) => {
    console.log(err, stdout);
});