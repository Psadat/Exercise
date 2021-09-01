
const student = {name:"Parisa Rasuoli", age: 33, filed: 'software'}

function showProperties(obj) {
    let txt = " ";
    for (let i in student) {
        txt += student[i] + " ";
      }
      return txt;
}


  console.log(showProperties(student));



