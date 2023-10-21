const rangeCharacters = document.getElementById('range-char');

const numberCharacters = document.getElementById('number-char');


//Synchronizing Range and Number Inputs
rangeCharacters.addEventListener('input', syncCharAmount);

numberCharacters.addEventListener('input', syncCharAmount);

function syncCharAmount(e) {
    const ValueAmount = e.target.value;
    rangeCharacters.value = ValueAmount;
    numberCharacters.value = ValueAmount;
};