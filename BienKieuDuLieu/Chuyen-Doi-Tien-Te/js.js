function myScript(operation) {
    let number = document.getElementById("number").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let money = ( number * to ) / from;
    let element = document.getElementById('result');
    element.innerHTML = "Số tiền là : " + money;
}
