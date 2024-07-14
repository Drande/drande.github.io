const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const dotenv = require('dotenv').config({path: 'src/.env'}); ;

const envFile = `export const environment = {
  itchioApiSecret: '${process.env.ITCHIO_API_SECRET}',
};
`;
let targetPath;
switch(process.env.ENVIRONMENT) {
  default:
  case 'development':
    targetPath = path.join(__dirname, `./src/environments/environment.development.ts`);
  break;
  case 'production':
    targetPath = path.join(__dirname, `./src/environments/environment.ts`);
  break;
}
fs.writeFile(targetPath, envFile, (err) => {
    if (err) {
        console.error(err);
        throw err;
    } else {
        console.log(successColor, `${checkSign} Successfully generated ${path.basename(targetPath)} file.`);
    }
});