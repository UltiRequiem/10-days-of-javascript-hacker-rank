class Polygon {
  constructor(heights) {
    this.my_perimeter = heights.reduce((acc, curr) => acc + curr);
  }

  perimeter() {
    return this.my_perimeter;
  }
}
