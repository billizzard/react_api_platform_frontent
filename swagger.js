const fs = require('fs');
const CodeGen = require('swagger-js-codegen').CodeGen;

const folder = 'src/api/swagger/';
const swagger = JSON.parse(fs.readFileSync(`${folder}swagger.json`, 'UTF-8'));

const source = CodeGen.getReactCode({
  moduleName: 'Api',
  className: 'Api',
  swagger: swagger,
  lint: false,
  // template: {
  //   'class': fs.readFileSync(`${folder}class.mustache`, 'utf-8'),
  //   method: fs.readFileSync(`${folder}method.mustache`, 'utf-8')
  // }
});

fs.writeFile(`${folder}api.js`, source, function (err) {
  if (err) {
    return console.log('Haven`t been saved');
  }

  console.log('Saved to file');
});

console.log(source);
