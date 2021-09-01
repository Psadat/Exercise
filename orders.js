const order01 = {gender:"Khanome", fullname:'Parisa Rasouli', send:'post', address:'Alborz'}
const order02 = {gender:"Agha", fullname:'Alireza Elyjoon', send:'pishtaz', address:'Alborz'}
const order03 = {gender:"Khanome", fullname:'Pariya Lay', send:'peyk', address:'Tehran'}
const order04 = {gender:"Agha", fullname:'Ehasan Rony', send:'post', address:'Alborz'}
const order05 = {gender:"Khanome", fullname:'Mehri Fekri', send:'bari', address:'Tehran'}
const order06 = {gender:"Agha", fullname:'Mamad Sadat', send:'post', address:'alborz'}


const orders = [] ;
orders [0] = order01;
orders [1] = order02;
orders [2] = order03;
orders [3] = order04;
orders [4] = order05;
orders [5] = order06;

function myOrder(Arry){
    let txt = " ";
    for( let i of orders){
    txt += i + '\n';
    console.log(i.gender + " " + i.fullname + " " + "sefareshe shoma be sorate" + " " + i.send + " " + "be address" + " " + i.address + " " + "ersal sode.");
    }
    return txt;
}

(myOrder(orders));
