function getAnimalSound(animal) {
   let animalSound = animal.sound;
   if (animal === undefined) {
       return null
   };
       return animalSound
   }

function getAverageMark(marks) {
    if (marks.length === 0) {
        return 0
    };
    let average = 0;
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    average = sum / marks.length;
    return Math.round(average); 
}

function checkBirthday(birthday) {
    let now = Date.now();
    birthday = Number(new Date(birthday));
    let diff = now - birthday;
    let age = diff / 31557600000; 
    // 31557600000 как среднее арифметическое за 4 года, три из которых 
    //обычные (31536000000), а четвертый - високосный (31622400000)
     if (age >= 18) {
        return true
     } else  {
        return false
     } 
    }