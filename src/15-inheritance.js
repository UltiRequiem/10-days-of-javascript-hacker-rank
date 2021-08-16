class Rectangle {
  constructor(w, h) {
    this.w = w
    this.h = h
  }

  area() {
    return this.w * this.h
  }
}

class Square extends Rectangle {
  constructor(s) {
    super(s)
    this.h = s
    this.w = s
  }
}
