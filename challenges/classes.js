// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CuboidMaker {
  constructor(prop) {
    this.length = prop.length;
    this.width = prop.width;
    this.height = prop.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

class CubeMaker extends CuboidMaker {
  constructor(prop) {
    super(prop);
  }
  cubeVolume() {
    return this.length * this.length * this.length;
  }
  cubeSurfaceArea() {
    return 6 * (this.length * this.length);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  height: 5,
  width: 5
});

const cube = new CubeMaker({
  length: 6,
  height: 6,
  width: 6
});

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());
