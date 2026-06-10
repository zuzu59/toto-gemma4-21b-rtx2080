const fs = require('fs');
const path = require('path');

const versionFile = path.join(__dirname, '../.version');
const versionConstFile = path.join(__dirname, '../src/constants/version.js');

try {
  const content = fs.readFileSync(versionFile, 'utf8').trim();
  const [major, minor, patch] = content.split('.').map(Number);
  
  // Increment the patch version
  const newVersion = `${major}.${minor}.${(patch + 1).toString()}`;
  
  fs.writeFileSync(versionFile, newVersion);
  fs.writeFileSync(versionConstFile, `export const VERSION = '${newVersion}';`);
  
  console.log(`Version updated to: ${newVersion}`);
} catch (err) {
  console.error('Error updating version:', err);
  process.exit(1);
}
