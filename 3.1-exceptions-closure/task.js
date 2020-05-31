// Задача 1
function parseCount(data) {
    const integer = Number.parseInt(data);
    if (isNaN(integer)) {
        const error = new Error("Невалидное значение");
        throw error
    } return integer;
};

function validateCount(data) {
    try {
      return parseCount(data);
    } catch(error) {
      return error;
};
}

// Задача 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    
    if ((a + b) < c || (b + c) < a || (a + c) < b) {
        throw new Error("Треугольник с такими сторонами не существует")
    }
}
  
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    
    getArea() {
        const p = this.getPerimeter() / 2;
        let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c); 
    } catch(e) {
        return {
            getPerimeter() {
                return "Ошибка! Неправильный треугольник";
            },

            getArea() {
            return "Ошибка! Неправильный треугольник";
        }
    } 
  }
}
