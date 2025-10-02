/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const sourceResume = path.join(projectRoot, 'src', 'app', 'public', 'BoyingTangResume_09_2025.docx.pdf');
const publicDir = path.join(projectRoot, 'public');
const targetResume = path.join(publicDir, 'resume.pdf');

try {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  if (fs.existsSync(sourceResume)) {
    fs.copyFileSync(sourceResume, targetResume);
    console.log(`Copied resume to ${targetResume}`);
  } else {
    console.warn('Resume source file not found, skipping copy.');
  }
} catch (err) {
  console.error('Error copying resume:', err);
  process.exit(1);
}


