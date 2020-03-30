let arr = [5, 6, 7, 4, 9, 8, 5, 6, 9, 3, 7];

function findMax(arr) {

    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));

