
const exchangeRate = 4164.82;

const usdInput = document.getElementById('usd');
const copInput = document.getElementById('cop');

function convertUsdToCop() {
    const usdAmount = parseFloat(usdInput.value);
    const copAmount = usdAmount * exchangeRate;
    copInput.value = copAmount.toFixed(2);
}

function convertCopToUsd() {
    const copAmount = parseFloat(copInput.value);
    const usdAmount = copAmount / exchangeRate;
    usdInput.value = usdAmount.toFixed(2);
}

usdInput.addEventListener('input', convertUsdToCop);
copInput.addEventListener('input', convertCopToUsd);
