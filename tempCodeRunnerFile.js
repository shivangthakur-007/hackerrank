class Polygon {
  constructor(inarr=[]) {
    this.arr = inarr;
  }
  perimeter() {
    let sum=0;
    for (let index = 0; index < this.arr.length; index++) {
      sum += this.arr[index]
    }
    return sum;
  }
}