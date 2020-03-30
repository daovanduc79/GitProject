function fibonacci(n) {
    if (n <= 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

function isFibonacci(number) {
    for (let i = 0; i <= number; i++) {
        if (fibonacci(i) === number) {
            return true;
        }
    }
    return false;
}

console.log(isFibonacci(13));