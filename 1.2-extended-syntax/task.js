function getResult(a,b,c){
  "use srtict";
  let x1;
  let x2;
  let D = Math.pow(b,2) - 4 * a * c; 
    if  (D > 0) {
      x1 = (-b + Math.sqrt(D)) / (2 * a);
      x2 = (-b - Math.sqrt(D)) / (2 * a);
        return [x1, x2];   
    } else if (D === 0) {
      x1 = -b / (2 * a);
        return [x1];
    } else {
        return [];   
    }
}

function getAverageMark(marks){
  
  if (marks.length === 0) {
    return 0;
} else if (marks.length > 5) {
    console.log("Не более 5 оценок!");
    marks = marks.slice(0, 5); 
   } 
      let sum = 0;      
      for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    } 
    return sum / marks.length;    

}


function askDrink(name,dateOfBirthday){
    let date = new Date();
    let nowYear = date.getFullYear();
    let age = nowYear - dateOfBirthday.getFullYear();
      if (age > 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
      } else {
          return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
      }
}