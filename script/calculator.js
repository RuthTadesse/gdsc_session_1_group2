function calculate() {
    var input = document.getElementById("input").value;
    var result = eval(input);
    document.getElementById("input").value = result;
}

function clearInput() {
    document.getElementById("input").value = "";
}

function deleteLastCharacter() {
    var input = document.getElementById("input").value;
    document.getElementById("input").value = input.slice(0, -1);
}