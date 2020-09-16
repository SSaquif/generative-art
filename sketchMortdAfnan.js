const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [2048, 2048],
};

const createGrid = () => {
  const innerPoints = [];
  const countInner = 35;
  for (let x = 0; x < countInner; x++) {
    for (let y = 0; y < countInner; y++) {
      // Switching to a [u,v] co-ordiante system
      const u = countInner <= 1 ? 0.5 : x / (countInner - 1);
      const v = countInner <= 1 ? 0.5 : y / (countInner - 1);
      const radius = Math.abs(random.gaussian() * 0.014);
      innerPoints.push({ position: [u, v], radius });
    }
  }

  const outterPoints = [];
  const countOutter = 70;
  for (let x = 0; x < countOutter; x++) {
    for (let y = 0; y < countOutter; y++) {
      // Switching to a [u,v] co-ordiante system
      const u = countOutter <= 1 ? 0.5 : x / (countOutter - 1);
      const v = countOutter <= 1 ? 0.5 : y / (countOutter - 1);
      const radius = Math.abs(random.gaussian() * 0.014);
      outterPoints.push({ position: [u, v], radius });
    }
  }
  return { innerPoints, outterPoints };
};

const sketch = () => {
  const margin = 900;
  const marginOutter = 100;

  const { innerPoints, outterPoints } = createGrid();

  return ({ context, width, height }) => {
    context.fillStyle = "pink";
    context.fillRect(0, 0, width, height);

    innerPoints.forEach(({ position: [u, v], radius }) => {
      //creating the circles
      console.log(u, v);
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      context.beginPath();
      console.log(`x:${x}, y:${y}, radius:${radius}`);
      context.arc(x, y, radius * width, 0, 2 * Math.PI, false);
      context.fillStyle = "#6e1212";
      context.lineWidth = 20;
      context.fill();
    });

    outterPoints.forEach(({ position: [u, v], radius }) => {
      //creating the circles
      console.log(u, v);
      const x = lerp(0, width, u);
      const y = lerp(0, height, v);

      context.beginPath();
      console.log(`x:${x}, y:${y}, radius:${radius}`);
      context.arc(x, y, radius * width, 0, 2 * Math.PI, false);
      context.strokeStyle = "#8a1515";
      context.lineWidth = 2;
      context.stroke();
    });
  };
};

canvasSketch(sketch, settings);
