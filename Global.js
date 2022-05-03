console.log("Hello world");
console.log(__filename);        //global object, no need to import anything
console.log(__dirname);

const path = require("path");                       //require function used to import/load external modules
console.log(`The file name is ${path.basename(__filename)}`);
console.log(`The directory name is ${path.basename(__dirname)}`);

console.log(process.pid);              //process object - global
console.log(process.versions.node);
console.log(process.argv);            //argument variables(in array) with process.argv

const index = flag => {
    return process.argv.indexOf(flag);
}
console.log(index("hello"));

process.stdout.write("Control over next line and convenient");  //Standard output
