
function calculator(operation) {
    let numberone=parseInt(document.getElementById("numberone").value);
    // console.log('numberone=>', numberone);
    let numbertwo=parseInt(document.getElementById("numbertwo").value);
    // console.log('numbertwo=>', numbertwo);

    if (operation == "+") {
        result = numberone + numbertwo;
    } else {
        if (operation == "-") {
            result = numberone - numbertwo;
        } else {
            if (operation == "*") {
                result = numberone * numbertwo;
            } else {
                result = numberone / numbertwo;
            }
        }
    }

    let element = document.getElementById('result');
    element.innerHTML = "Ket qua cua phep tinh la: " + result;

}