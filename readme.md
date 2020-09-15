## Housekeeping Notes

- Run following to open files on browser

  ```bash
  canvas-sketch sketch.js --open
  ```

- canvas sketch is both a library and a CLI (but 2 diff modules)

## Links

- [Cheat Sheet from Matt](https://github.com/mattdesl/workshop-generative-art/blob/master/docs/cheat-sheet.md)

- [Useful Modules from Matt](https://github.com/mattdesl/workshop-generative-art#other-modules-for-creative-coding)

- [Canvas Sketch Util](https://github.com/mattdesl/canvas-sketch-util/)

- [ThreeJS doc](https://threejs.org/docs/)

- Example of [Using with React](https://github.com/mattdesl/canvas-sketch/pull/77/files)

- [Solving Sol](https://solvingsol.com/): A website with instructions to recreate Sol LeWitt's Art. Also has some great resources.

## u-v Co-ordinate & Lerp

1. lerp = Linear Interpolation
2. lerp(start,end,interpolation-factor)
3. u and v are the interpolation factors
4. Generally Factor goes from 0 to 1 both Horizontally and Vertically
5. 0.5 is center. If u is 0.5, then we are in the middle of start and end, in x-axis

## Deterministic Randomness

1. Use random from `canvas-sketch-utils/random` for deterministic random
2. Use together with seed

## Topics to Read Up On

1. [Emergent Systems](https://en.wikipedia.org/wiki/Emergence#:~:text=Emergent%20structures%20are%20patterns%20that,actions%20of%20many%20individual%20entities.&text=In%20fact%2C%20some%20systems%20in,be%20reduced%20in%20this%20way.) and [Rule Based Systems](https://www.google.com/search?q=rule+based+systems&oq=rule+based&aqs=chrome.0.0j69i57j0l6.2544j0j7&sourceid=chrome&ie=UTF-8)

## Artists

1. [Sol LeWitt](https://en.wikipedia.org/wiki/Sol_LeWitt)

2. [Matt Deslauriers](https://www.mattdesl.com/): Check out his Front End Masters course, if you can.

3. [Aaron Penne](https://github.com/aaronpenne/generative_art)
