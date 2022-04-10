// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42)
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(street1, street2){
    return Math.abs(street2 - street1) * 264
}

function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination);

    if (feet <= 400) {
        return 0;
      } else if (feet > 400 && feet <= 2000) {
        return (feet - 400) * 0.02;
      } else if (feet > 2000 && feet <= 2500) {
        return 25;
      } else if (feet > 2500) {
        return 'cannot travel that far';
      }
}
