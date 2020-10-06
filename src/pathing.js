const path = require('path');

function resolve(filePath) {
    if(filePath === true || filePath === undefined)
        return filePath;
    return path.resolve(filePath.replace(/["']/g, ""));
} 

module.exports = {
    resolve: resolve
}