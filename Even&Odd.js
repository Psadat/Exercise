

EvenOddFuntion(10);

function EvenOddFuntion(limit){
    for(let i = 0 ; i<=limit ; i++){
        const number = i % 2 ;
        if(number === 0){
            console.log(i , '"Even"');
        }
        else{
            console.log(i , '"Odd"');
        }
    }
}