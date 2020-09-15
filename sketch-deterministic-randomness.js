const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");

const settings = {
  dimensions: [2048, 2048],
};

const createGrid = () => {
  const points = [];
  const count = 150;
  for (let x = 0; x < count; x++) {
    for (let y = 0; y < count; y++) {
      // Switching to a [u,v] co-ordiante system
      const u = count <= 1 ? 0.5 : x / (count - 1);
      const v = count <= 1 ? 0.5 : y / (count - 1);
      points.push([u, v]);
    }
  }
  return points;
};

const sketch = () => {
  const margin = 125;
  const filteredPoints = createGrid().filter(([u, v]) => {
    return Math.random() > 0.98;
  });
  console.log(filteredPoints);

  return ({ context, width, height }) => {
    context.fillStyle = "#170b36";
    context.fillRect(0, 0, width, height);

    filteredPoints.forEach(([u, v]) => {
      //creating the circles
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      context.beginPath();
      context.arc(x, y, 0.062, 0, 2 * Math.PI, false);
      context.strokeStyle = "white";
      context.lineWidth = 40;
      context.stroke();
    });
  };
};

canvasSketch(sketch, settings);
