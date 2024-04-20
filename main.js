import inquirer from 'inquirer';
const exchangeRates = {
    USD: 1.22,
    EUR: 1.08,
    GBP: 0.91,
    JPY: 132.5,
};
function convertCurrency() {
    const currencies = ['USD', 'EUR', 'GBP', 'JPY'];
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'baseCurrency',
            message: 'Select base currency:',
            choices: currencies,
        },
        {
            type: 'list',
            name: 'targetCurrency',
            message: 'Select target currency:',
            choices: currencies,
        },
        {
            type: 'input',
            name: 'amount',
            message: 'Enter the amount to convert:',
            validate: (input) => !isNaN(parseFloat(input)),
        },
    ])
        .then(({ baseCurrency, targetCurrency, amount }) => {
        const convertedAmount = (exchangeRates[targetCurrency] || 1) * parseFloat(amount);
        console.log(`\n${amount} ${baseCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`);
    })
        .catch((error) => {
        console.error('Error:', error.message);
    });
}
convertCurrency();
