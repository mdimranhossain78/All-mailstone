
/**
 * convert inch to feet and mile to killomiter.
 * 
 */

function inchToFeet(inch){
   const feet = inch / 12;
   return feet;
}

const result = inchToFeet(66);
console.log (result)

function inchFeet(inch){
    const feetfact = inch / 12;
    const inchfact = inch % 12;
    const result = feetfact+ ' feet ' + inchfact + ' inch '
    return result
}

const hight = inchFeet(66);
console.log(hight)

// mile to killomiter:

function mileToKm(mile){
    const km = mile * 1.609344 
    return km;

}

const m = mileToKm(5)
console.log(m)