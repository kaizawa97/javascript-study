for (var x = 0; x < 10000; ++x) {
    if (x % 15 === 0) {
        document.write('FizzBuzz' + ' ');
    }
    else if (x % 3 === 0) {
        document.write('Fizz' + ' ');
    }
    else if (x % 5 === 0) {
        document.write('Buzz' + ' ');
    }
    else {
        document.write(x + ' ');
    }
}