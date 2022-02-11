import { area, perimeter } from "./03-arithmetic.js";

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.perimeter = perimeter(width, height);
    this.area = area(width, height);
  }
}

const rectangle = new Rectangle(4, 5);

console.log(rectangle);
