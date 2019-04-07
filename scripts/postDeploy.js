const del = require('del');

// Remove mirrored files to avoid confusion when working in develop.

(async () => {
  const deletedPaths = await del(['public/LICENSE', 'public/README.md']);

  // console.log('Deleted files and folders:\n', deletedPaths.join('\n'));
})();