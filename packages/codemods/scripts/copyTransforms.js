import fs from 'fs';
import path from 'path';

const sourcePath = './src/transforms';
const destinationPath = './dist/transforms';
const excludedDirectories = ['__tests__', '__testfixtures__'];

function copyFolderRecursive(src, dest) {
  // Check if the source path exists
  if (!fs.existsSync(src)) {
    throw new Error(`Source path doesn't exist: ${src}`);
  }

  // Create destination folder if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }

  // Get all files and subdirectories in the source path
  const items = fs.readdirSync(src);

  // Copy each item to the destination path
  items.forEach((item) => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    // Check if the item is a directory
    if (fs.statSync(srcPath).isDirectory()) {
      // Check if the directory is not in the excluded list
      if (!excludedDirectories.includes(item)) {
        // Recursively copy the directory
        copyFolderRecursive(srcPath, destPath);
      }
    } else {
      // Copy the file
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Call the function to start the copy process
copyFolderRecursive(sourcePath, destinationPath);
