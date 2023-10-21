
// range and number input elements
const rangeCharacters = document.getElementById('range-char');

const numberCharacters = document.getElementById('number-char');

// form submit element
const formContainer = document.querySelector('#password-form');

//number of char, symbols, number, upperCase elements
const numbersEl = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');
const upperCaseEl = document.querySelector('#uppercase');



//Synchronizing Range and Number Inputs
rangeCharacters.addEventListener('input', syncCharAmount);

numberCharacters.addEventListener('input', syncCharAmount);

function syncCharAmount(e) {
    const ValueAmount = e.target.value;
    rangeCharacters.value = ValueAmount;
    numberCharacters.value = ValueAmount;
};

//Generating the password when the form is submitted

formContainer.addEventListener('submit', function(e) {
    e.preventDefault();

    const characterAmount = numberCharacters.value;
    const includeUpperCase = upperCaseEl.value;
    const includeNumbers = numbersEl.value;
    const includeSymbols = symbolsEl.value;

    const password = generatePassword(

        characterAmount,
        includeUpperCase,
        includeNumbers,
        includeSymbols
    )
})