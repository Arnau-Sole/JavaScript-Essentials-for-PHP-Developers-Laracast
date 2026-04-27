function helloWorld() {
    alert('hello, world');
}

function sum(a, b) {
    return a + b;
}

function divide(a, b) {

    if (b == 0) {
        throw new Error('Cannot divide by zero');
    } else {
        return a / b;
    }
}

var globalVar = 'Global';
function sayHello(name) {
    var message;
    
    message = 'Hello, ' + name;

    message.toUpperCase();
}
