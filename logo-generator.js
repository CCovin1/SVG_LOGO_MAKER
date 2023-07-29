const readline = require('readline');
const fs = require('fs');

// Function to create the SVG content
function createSVG(text, textColor, shape, shapeColor) {
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${shapeColor}" />
      <text x="50%" y="50%" font-size="50" fill="${textColor}" dominant-baseline="middle" text-anchor="middle">${text}</text>
    </svg>
  `;
  return svgContent;
}

// Function to write the SVG content to the file
function createLogoSVG(text, textColor, shape, shapeColor) {
  const svgContent = createSVG(text, textColor, shape, shapeColor);
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

