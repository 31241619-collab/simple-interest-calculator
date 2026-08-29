function updateRate() {
    var rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rate;
}

function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal <= 0) {
        alert("Enter a positive number for Principal.");
        document.getElementById("principal").focus();
        return;
    }

    var interest = (principal * years * rate) / 100;
    var amount = parseFloat(principal) + interest;

    document.getElementById("result").innerHTML =
        "If you deposit <b>" + principal + "</b>,<br>" +
        "at an interest rate of <b>" + rate + "%</b>.<br>" +
        "You will receive an amount of <b>" + amount.toFixed(2) +
        "</b> in the year <b>" + (new Date().getFullYear() + parseInt(years)) + "</b>.";
}