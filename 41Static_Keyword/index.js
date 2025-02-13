// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class(class owns anything static, not the objects)

class MathUtil1 {
  static PI = 3.14159;
  static getDiameter(radius) {
    return radius * 2;
  }
}

console.log(MathUtil1.PI);
console.log(MathUtil1.getDiameter(2))
