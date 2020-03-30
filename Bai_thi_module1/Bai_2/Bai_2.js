let arr = new Array(10);
let x = 16;
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100);
}
document.write(arr + '<br>' + 'phần tử x = ' + x);

function tryRemoveFromArray(arr, x) {

    for (let i = 0; i < arr.length; i++) {
        if (x === arr[i]) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

document.write('<hr>' + 'sau khi xóa phần tử x' + '<br>');
document.write(tryRemoveFromArray(arr, x));