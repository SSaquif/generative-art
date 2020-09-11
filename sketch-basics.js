const canvasSketch = require("canvas-sketch");

const settings = {
  // dimensions: [2048, 2048], //good for insta
  dimensions: "A4",
  units: "cm",
  pixelsPerInch: 300,
};

const sketch = () => {
  return ({ context, width, height }) => {
    console.log(width, height);
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width / 2, height / 2, width * 0.2, 0, 2 * Math.PI, false);
    context.fillStyle = "red";
    context.fill();
  };
};

canvasSketch(sketch, settings);
