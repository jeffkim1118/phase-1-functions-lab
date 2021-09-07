function distanceFromHqInBlocks(value){
    value = value - 42;
    return Math.abs(value);
}

function distanceFromHqInFeet(value){
    let blocks = distanceFromHqInBlocks(value);
    let feet = blocks * 264;
    return feet;
}

function distanceTravelledInFeet(start, destination){
    let difference = Math.abs(start-destination);
    let distanceTravelled = difference * 264;
    return distanceTravelled;
}

function calculatesFarePrice(start, destination){
    let difference = Math.abs(start-destination);
    let distanceTravelled = difference * 264;
    let fee;

    if(distanceTravelled > 2500){
        return 'cannot travel that far';
    }
    
    if(distanceTravelled <= 400){
        fee = 0;
        return fee;
    } else if(distanceTravelled > 400 && distanceTravelled <= 2000){
        let newDistance = distanceTravelled - 400;
        fee = newDistance * 0.02;
        return fee;
    } else if(distanceTravelled > 2000){
        fee = 25.00;
        return fee;
    }
}