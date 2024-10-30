const rates = {
    USD: { USD: 1, EUR: 0.94, JPY: 149.7, GBP: 0.83, INR: 83.1, CAD: 1.38, AUD: 1.57, CHF: 0.91, CNY: 7.32, SGD: 1.37 },
    EUR: { USD: 1.06, EUR: 1, JPY: 159.3, GBP: 0.88, INR: 88.4, CAD: 1.46, AUD: 1.66, CHF: 0.97, CNY: 7.78, SGD: 1.45 },
    JPY: { USD: 0.0067, EUR: 0.0063, JPY: 1, GBP: 0.0055, INR: 0.56, CAD: 0.0092, AUD: 0.0104, CHF: 0.0061, CNY: 0.049, SGD: 0.0091 },
    GBP: { USD: 1.21, EUR: 1.13, JPY: 182.2, GBP: 1, INR: 100.2, CAD: 1.66, AUD: 1.88, CHF: 1.1, CNY: 8.85, SGD: 1.64 },
    INR: { USD: 0.012, EUR: 0.011, JPY: 1.79, GBP: 0.010, INR: 1, CAD: 0.017, AUD: 0.019, CHF: 0.011, CNY: 0.088, SGD: 0.016 },
    CAD: { USD: 0.72, EUR: 0.68, JPY: 108.7, GBP: 0.60, INR: 59.6, CAD: 1, AUD: 1.13, CHF: 0.76, CNY: 5.34, SGD: 1.12 },
    AUD: { USD: 0.64, EUR: 0.60, JPY: 96.5, GBP: 0.53, INR: 52.9, CAD: 0.89, AUD: 1, CHF: 0.67, CNY: 4.74, SGD: 1.0 },
    CHF: { USD: 1.10, EUR: 1.04, JPY: 160.0, GBP: 0.91, INR: 91.0, CAD: 1.47, AUD: 1.58, CHF: 1, CNY: 7.35, SGD: 1.4 },
    CNY: { USD: 0.14, EUR: 0.13, JPY: 13.6, GBP: 0.11, INR: 11.1, CAD: 0.19, AUD: 0.21, CHF: 0.14, CNY: 1, SGD: 0.18 },
    SGD: { USD: 0.73, EUR: 0.69, JPY: 109.4, GBP: 0.61, INR: 59.7, CAD: 0.89, AUD: 0.98, CHF: 0.71, CNY: 5.44, SGD: 1 }
};

function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = "Please enter a valid amount";
        return;
    }

    const convertedAmount = amount * rates[fromCurrency][toCurrency];
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
