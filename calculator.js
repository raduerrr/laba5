function calculateTotal(event) {
    "use strict";
    event.preventDefault();

    let quantityInput = document.getElementById("quantity");
    let productSelect = document.getElementById("product");
    let resultElement = document.getElementById("result");

    let quantityValue = quantityInput.value.trim();
    let regex = /^\d+$/;
    let matchResult = quantityValue.match(regex);

    if (matchResult === null) {
        resultElement.textContent = "Ошибка: введите корректное целое число (допустимы только цифры).";
        resultElement.className = "result error";
        return;
    }

    let quantity = parseInt(quantityValue, 10);
    if (quantity === 0) {
        resultElement.textContent = "Ошибка: количество товара должно быть больше нуля.";
        resultElement.className = "result error";
        return;
    }

    let price = parseInt(productSelect.value, 10);
    let totalCost = quantity * price;

    resultElement.textContent = "Итоговая стоимость заказа: " + totalCost.toLocaleString("ru-RU") + " руб.";
    resultElement.className = "result success";
}

window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let calcButton = document.getElementById("calculate-btn");
    calcButton.addEventListener("click", calculateTotal);
});