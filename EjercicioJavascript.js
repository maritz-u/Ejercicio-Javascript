const numArray = [6, 8, 9, 2, 5, 10]

const suma = (u, v, w, x, y, z) => u + v + w + x + y + z

const prom = (a, b, c, d, e, f) => {
  const sum = suma(a, b, c, d, e, f)
  return sum / 6
}

console.log(prom(6, 8, 9, 2, 5, 10))