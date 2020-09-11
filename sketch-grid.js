const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");

const settings = {
  dimensions: [2048, 2048],
};

const createGrid = () => {
  const points = [];
  const count = 5;
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
  const points = createGrid();
  const margin = 125;
  console.log(points);

  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    points.forEach(([u, v]) => {
      //creating the circles
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      context.beginPath();
      context.arc(x, y, 100, 0, 2 * Math.PI, false);
      context.strokeStyle = "red";
      context.lineWidth = 40;
      context.stroke();
    });
  };
};

canvasSketch(sketch, settings);
