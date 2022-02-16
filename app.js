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





