
const objrct = {
    name: String,
    age: Number,
    grade: String,
     print :function(name, grade, age){
        return {name, grade,age}
    }
}



// console.log(objrct.print("Ankesh", "1st", 3))

// You just need to implement the createStudentProfile function
function createStudentProfile(name, age, grade) {
    // Return an object with name, age, and grade
     if(age > 5){
      return {name,age,grade}
     } else {
      return "Invalid input"
     }
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.on('line', (input) => {
    const { name, age, grade } = JSON.parse(input);
    const result = createStudentProfile(name, age, grade);
    process.stdout.write(JSON.stringify(result));
  });