let display = document.getElementById("display")

function displayInputBtn(input) {
    display.value += input;
}

function backSpace() {
    display.value = display.value.slice(0, -1)
}

function clearBtn() {
    display.value = ""
}

function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch(error) {
        display.value = "Error"
    }
}