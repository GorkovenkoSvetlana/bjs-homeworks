// Задача 1

function getSolutions(a, b, c) {
    let x1;
    let x2;
    let D = Math.pow(b,2) - 4 * a * c;
      if (D < 0) {
          return {
              D,
              roots: []
          };
      } else if (D === 0) {
          x1 = -b / (2 * a);
          return {
              D,
              roots: [x1]
          };
      } else {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D,
            roots: [x1, x2]
        };
      }
} 

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${(result.D)}`)
    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${(result.roots)}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${(result.roots[0])}, X₂ = ${(result.roots[1])}`);
    }
}

// Задача 2
//data = {course: []};

function getAverageMark(marks) {
  let sum = 0;
  if (marks.length === 0) {
      return 0
  };
  for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
  }
  return sum / marks.length;
}

function getAverageScore(data) {
    let average = 0;
    let size = 0;
   
    for (let course in data) {
        console.log(`data.${course} = ${data[course]}`);
        average += getAverageMark(data[course]);
        data[course] = getAverageMark(data[course]);
        size ++;
    } if (size !== 0) {
        average = average / size;
    } 
       data.average = data;
      return {
       data
    };
}
     
// Задача 3

 function getPersonData(secretData) {
   return getDecodedValue();
}

function getDecodedValue(secret) {
    const aaa = firstName;
    const bbb = lastName;
    if (secret.aaa === 0 || secret.bbb === 0) {
        return    'Родриго'  
    } else if (secret.aaa === 1 || secret.bbb === 1)  {
        return  'Эмильо'
            
    } 
}