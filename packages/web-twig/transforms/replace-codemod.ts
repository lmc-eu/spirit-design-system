// Run with:
// node replace-codemod.ts ./src placement

// Result:
// Will replace all strings 'top-left' with 'top-start' in all files in the specified directory (./src)

const fs = require('fs');
const path = require('path');

// Read command-line arguments
const args = process.argv.slice(2);

// Specify the directory where your project files are located
const projectDirectory = args[0];

if (!projectDirectory) {
  console.error('Please specify the project directory');
  process.exit(1);
}

const codemodName = args[1];

// Define your regex pattern and replacement
switch (codemodName) {
  case 'placement':
    var pattern = /top-left/g;
    var replacement = 'top-start';
    break;
  case 'buttonText':
    var pattern = /buttonLabel/g;
    var replacement = 'buttonText';
    break;
  case 'tooltipModern':
    var pattern = /<Tooltip\s*(.*?)\s*>([\s\S]*?)<\/Tooltip>/g;
    var replacement = '<TooltipModern $1>$2</TooltipModern>';
    break;
  default:
    console.error('Invalid codemod name');
    process.exit(1);
}

// Variables to track the number of changed files
let filesChanged = 0;

// Function to perform regex find and replace in a file
function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = content.replaceAll(pattern, replacement);

  // Check if the content has changed
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    filesChanged++;
  }
}

// Function to recursively process files in a directory
function processFiles(directoryPath) {
  fs.readdirSync(directoryPath).forEach((file) => {
    const filePath = path.join(directoryPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      // If it's a directory, recursively process its files
      processFiles(filePath);
    } else {
      // If it's a file, perform regex find and replace
      replaceInFile(filePath);
    }
  });
}

// Start processing files in the project directory
processFiles(projectDirectory);

// Log summary
console.log(
  `
  \x1b[32mReplacement complete.\x1b[0m 
  ${filesChanged} files were changed.
`,
);
