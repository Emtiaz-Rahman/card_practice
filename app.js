function updateiPhone(isIncresing) {
    const iphoneInput = document.getElementById('iphone_number');

    let iphoneNumber = iphoneInput.value;
    if (isIncresing) {
        iphoneNumber = parseInt(iphoneInput.value) + 1;
    }
    else if (iphoneNumber > 0) {
        iphoneNumber = parseInt(iphoneInput.value) - 1;
    }
    iphoneInput.value = iphoneNumber

    const iPhoneTotal = document.getElementById('iphone_total');
    iPhoneTotal.innerText = iphoneNumber * 1219;
}

document.getElementById('iphone_increse').addEventListener('click', function () {
    updateiPhone(true);

})
document.getElementById('iphone_decrese').addEventListener('click', function () {
    updateiPhone(false);

})