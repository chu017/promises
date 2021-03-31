/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');

//promisify fs
var fsPromise = Promise.promisifyAll(fs);
//import (require) from the promisifcation.js
var promisification = require('./promisification.js');
//import (require) from the promiseConstructor.js
var promiseConst = require('./promiseConstructor.js');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return promiseConst.pluckFirstLineFromFileAsync(readFilePath)
    .then(function(user) {
      promisification.getGitHubProfileAsync(user);
    })
    .then(function(file) {
      console.log('FILE: ', file);
      fs.writeFileSync(writeFilePath, file);
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
