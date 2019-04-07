var copy = require('copy');

// For files that should appear at the root in both develop and master

copy.each(['LICENSE', 'README.md'], 'public', function (err, files) {
  // exposes the vinyl `files` created when the files are copied
});