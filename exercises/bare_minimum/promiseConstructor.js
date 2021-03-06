/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise((resolve, reject) => {
    // do something asynchronous which eventually calls either:
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        // rejected
        reject(err);

      } else {
        var firstLine = content.split('\n')[0];
        // fulfilled
        resolve(firstLine);
      }
    });
  });

};


// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise((resolve, reject) => {
    request.get(url, function(err, response) {
      if (err) {
        reject(err);
      } else {
        resolve(response.statusCode);
      }
    });
  });
};



// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
