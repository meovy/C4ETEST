function numberOneTriangle(number) {
    number = Number(number)
    let line = "";
    if (validateInput(number)) {
        for (let i = 1; i <= number; i++) {
            line += '<span>'
            for (let j = 1; j <= i; j++) {
              line += "*"
            }
            line+="</span>"
        }
    }
    
    return line
}

function validateInput(number) {
    if (isNaN(number) || number < 0 ) {
        alert('Invalid input')
        return false
    }
    return true
}

const input = document.querySelector('#number');
const result = document.getElementById('result')

input.oninput = () => {
    let a = numberOneTriangle(input.value)
    result.innerHTML = a
}