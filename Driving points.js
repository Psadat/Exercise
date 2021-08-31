

checkspeed(200);

function checkspeed(speed){
    const speedLimit = 70;
    const KlPointe = 5;

    if(speed < speedLimit){
        console.log("Good");
    }
    else{
        const pointes = Math.floor((speed - speedLimit) / KlPointe)
        if(pointes >= 12){
            console.log("Lisence is Susbend")
        }
        else{
            console.log(pointes);
        }
    }

}
