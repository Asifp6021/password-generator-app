// range and number input elements
const rangeCharacters = document.getElementById('range-char');

const numberCharacters = document.getElementById('number-char');

// form submit element
const formContainer = document.querySelector('#password-form');

//number of char, symbols, number, upperCase elements
const numbersEl = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');
const upperCaseEl = document.querySelector('#uppercase');

const passwordDisplay = document.querySelector('#password-display');

/* Inserting the Character Codes into arrays
Character Cheatsheet -> https://www.petefreitag.com/cheatsheets/ascii-codes/
*/
const lowerCaseCharCodes = arrayLowToHigh(97, 122);
const numberCharCodes = arrayLowToHigh(48, 57);
const symbolCharCodes = arrayLowToHigh(33, 47)
	.concat(58, 64)
	.concat(91, 96)
	.concat(123, 126);
const upperCaseCharCodes = arrayLowToHigh(65, 90);

//Synchronizing Range and Number Inputs
rangeCharacters.addEventListener('input', syncCharAmount);

numberCharacters.addEventListener('input', syncCharAmount);

function syncCharAmount(e) {
	const valueAmount = e.target.value;
	rangeCharacters.value = valueAmount;
	numberCharacters.value = valueAmount;
}

//Generating the password when the form is submitted
formContainer.addEventListener('submit', function (e) {
	e.preventDefault();

	const characterAmount = numberCharacters.value;
	const includeUpperCase = upperCaseEl.checked;

	const includeNumbers = numbersEl.checked;
	const includeSymbols = symbolsEl.checked;

	const password = generatePassword(
		characterAmount,
		includeUpperCase,
		includeNumbers,
		includeSymbols
	);

	passwordDisplay.innerText = password;
});

//Password generator function
function generatePassword(
	characterAmount,
	includeUpperCase,
	includeNumbers,
	includeSymbols
) {
	// default lowercase
	let charCodes = lowerCaseCharCodes;

	// if user want to include other options.
	if (includeNumbers) charCodes = charCodes.concat(numberCharCodes);
	if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes);
	if (includeUpperCase) charCodes = charCodes.concat(upperCaseCharCodes);

	// loop to generate random pass and matching range
	const passwordCharacters = [];

	for (let i = 0; i < characterAmount; i++) {
		let characterCodes =
			charCodes[Math.floor(Math.random() * charCodes.length)];
		passwordCharacters.push(String.fromCharCode(characterCodes));
	}

	return passwordCharacters.join('');
}

// Looping over char code
function arrayLowToHigh(low, high) {
	let array = [];

	for (let i = low; i <= high; i++) {
		array.push(i);
	}

	return array;
}
