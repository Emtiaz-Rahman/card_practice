function updateProduct(product, price, isIncresing) {
    const productInput = document.getElementById(product + '_number');

    let productNumber = productInput.value;
    if (isIncresing) {
        productNumber = parseInt(productInput.value) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productInput.value) - 1;
    }
    productInput.value = productNumber

    const productTotal = document.getElementById(product + '_total');
    productTotal.innerText = productNumber * price;
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '_number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const iphoneTotal = getInputValue('iphone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = iphoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub_total').innerText = subTotal;
    document.getElementById('tax_amount').innerText = tax;
    document.getElementById('total_price').innerText = totalPrice;
}

document.getElementById('iphone_increse').addEventListener('click', function () {
    updateProduct('iphone', 1219, true);

})
document.getElementById('iphone_decrese').addEventListener('click', function () {
    updateProduct('iphone', 1219, false);

})

document.getElementById('case_increse').addEventListener('click', function () {
    updateProduct('case', 59, true);
})

document.getElementById('case_decrese').addEventListener('click', function () {
    updateProduct('case', 59, false);
})





