function exchangeMoney() {
    let amount = parseInt(document.getElementById("amount").value);
    let resultElement = document.getElementById("result");
    let result = "";

    let num500 = Math.floor(amount / 500);
    amount %= 500;
    let num100 = Math.floor(amount / 100);
    amount %= 100;
    let num10 = Math.floor(amount / 10);
    amount %= 10;
    let num2 = Math.floor(amount / 2);

    if (amount === 0) {
        result = `500 руб. купюр: ${num500}, 100 руб. купюр: ${num100}, 10 руб. купюр: ${num10}, 2 руб. монет: ${num2}`;
    } else {
        result = "Невозможно разменять данную сумму купюрами и монетами.";
    }

    resultElement.innerText = result;
}
