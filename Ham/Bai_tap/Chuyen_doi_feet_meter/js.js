function feetToMeter(feet) {
    let meter ;
    meter = feet * 0.305 ;
    document.getElementById("meterout").innerHTML = meter ;
}
function meterToFeet(meter) {
    let feet ;
    feet = meter * 3.279 ;
    document.getElementById("feetout").innerHTML = feet ;
}