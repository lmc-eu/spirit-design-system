const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../dist');

/**
 * Replace the require statement in all files in the given directory.
 *
 * @param directory string
 */
function replaceInDirs(directory) {
  fs.readdir(directory, (error, files) => {
    if (error) {
      // eslint-disable-next-line no-console -- This is a CLI script
      return console.log(`Unable to scan directory: ${error}`);
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      if (fs.statSync(filePath).isDirectory()) {
        // If the path is a directory, call this function recursively
        replaceInDirs(filePath);
      } else {
        let fileContent = fs.readFileSync(filePath, 'utf8');

        // eslint-disable-next-line quotes -- Two conflicting rules, we do not won't to escape the quotes
        fileContent = fileContent.replace("require('html-react-parser')", "require('html-react-parser').default");

        fs.writeFileSync(filePath, fileContent, 'utf8');
      }
    });
  });
}

replaceInDirs(directoryPath);
