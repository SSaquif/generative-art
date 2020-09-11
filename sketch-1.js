const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
};

const createGrid = () => {
  const points = [];
  const count = 5;
  for (let x = 0; x < count; x++) {
    // Switching to a [u,v] co-ordiante system
    // See I have used x for both calculation, (so not using nested loop)
    const u = x / count;
    const v = x / count;
    points.push([u, v]);
  }
  return points;
};

const sketch = () => {
  const points = createGrid();
  console.log(points);

  return ({ context, width, height }) => {
    context.fillStyle = "#505050";
    context.fillRect(0, 0, width, height);

    points.forEach(([u, v]) => {
      //creating the circles
      const x = u * width;
      const y = v * height;

      context.beginPath();
      context.arc(x, y, width / 5, 0, 2 * Math.PI, false);
      context.strokeStyle = "red";
      context.lineWidth = 40;
      context.stroke();

      context.beginPath();
      context.arc(x * 1.5, y, width / 5, 0, 2 * Math.PI, false);
      context.strokeStyle = "crimson";
      context.lineWidth = 40;
      context.stroke();

      context.beginPath();
      context.arc(x * 0.5, y, width / 5, 0, 2 * Math.PI, false);
      context.strokeStyle = "orange";
      context.lineWidth = 40;
      context.stroke();
    });
  };
};

canvasSketch(sketch, settings);
