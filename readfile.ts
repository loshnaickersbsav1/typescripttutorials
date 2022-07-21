import * as fs from 'fs';

type Callback = (err: Error, data: any) => void;

function readFile(fileName: string, callback: Callback) {
  fs.readFile(fileName, 'utf8', callback);
}

export default readFile;
