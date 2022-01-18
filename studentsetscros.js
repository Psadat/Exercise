function student(firstName, lastname, major){
    this.firstName = firstName;
    this.lastname = lastname;
    this.major = major;
    this.scores = {};
}

student.prototype.setscore = function setscore(name, score){
    this.scores[name] = score;
}

student.prototype.getscore = function getscore(name){
    return this.scores[name];
}

let newStudent = new student("parisa", "rasouli", "EC");
let Student02 = new student("Alireza", "Sabouei", "FN");

newStudent.setscore('dars01', 20);
newStudent.setscore('dars02', 15);

console.log(newStudent, Student02);
console.log(newStudent.scores);
