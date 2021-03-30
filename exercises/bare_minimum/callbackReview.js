/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', (err, content) => {
    // console.log('Example from callbackReview.js');
    if (err) {
      callback(err, content);
      // console.log('fs.readFile failed :(\n', err);
    } else {
      // console.log('fs.readFile successfully completed :)\n', content);

      // retrieve the first line of the content
      var firstLine = content.split('\n')[0];
      callback(err, firstLine);

    }
  });
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request.get(url, function(err, response) {
    if (err) {
      callback(err, response);
    } else {
      callback(err, response.statusCode);
    }
  });

};



// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
