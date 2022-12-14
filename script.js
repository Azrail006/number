const number = document.querySelector('#number');
const output = document.querySelector('#output')
const okButton = document.querySelector('.btn');
okButton.addEventListener('click', (e) => {

    e.preventDefault()

    const result = isPrimeNum(parseInt(number.value));

    if (result) {
        printMessage('Это простое число')
    } else {
        printMessage('Это не простое число')
    }

});

function isPrimeNum(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function printMessage(message) {
    let again = document.createElement('again');
    again.textContent = message;
    output.appendChild(again);
}