function isPrimeNumber(a) {
    for (let i = 2; i < a; i++) {
        if (a % i === 0) return false
    }
    return true
}

function sumPrimeNumber(a, b) {
    a = Number(a)
    b = Number(b)
    let sum = 0;
    if (validateInput(a, b)) {
        for (let i = a; i <= b; i++) {
            if (i == 1 || i == 2 || isPrimeNumber(i)) {
                console.log(i);
                sum += i
            }
        }
    }

    return sum;
}

function validateInput(a, b) {
    if (a === '' || b === '') {
        alert('Input not empty')
        return false
    }
    if (isNaN(a) || isNaN(b)) {
        alert('Invalid input')
        return false
    }
    else {
        if (a >= b) {
            alert('a < b')
            return false;
        }
    }
    return true
}

const numberA = document.getElementById('numberA')
const numberB = document.getElementById('numberB')
const button = document.getElementById('btn-submit')
const result = document.getElementById('result')

button.addEventListener('click', function() {
    let resultNumber =  sumPrimeNumber(numberA.value, numberB.value)
    result.innerHTML = `<strong> Sum:</strong> <span style="color: red">${resultNumber}</span>`
})
