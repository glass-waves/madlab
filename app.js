// import functions and grab DOM elements

const inputBox = document.getElementById('input');
const storyBox = document.getElementById('output');


// -- User Input Fields --
const inputNoun1 = document.getElementById('noun-1');
const inputVerb2 = document.getElementById('verb-2');
const inputAdj3 = document.getElementById('adjective-3');
const inputNoun4 = document.getElementById('noun-4');
const inputVerb5 = document.getElementById('verb-5');
const inputAdj6 = document.getElementById('adjective-6');
const inputVerb7 = document.getElementById('verb-7');
const inputAdj8 = document.getElementById('adjective-8');
const inputNoun9 = document.getElementById('noun-9');
const inputVerb10 = document.getElementById('verb-10');
const inputVerb11 = document.getElementById('verb-11');
const inputNoun12 = document.getElementById('noun-12');

// -- Submit Button --
const createMadLib = document.getElementById('submit-button');

// -- Output Fields --
const outputNoun1 = document.getElementById('user-noun-1');
const outputVerb2 = document.getElementById('user-verb-2');
const outputAdj3 = document.getElementById('user-adj-3');
const outputNoun4 = document.getElementById('user-noun-4');
const outputVerb5 = document.getElementById('user-verb-5');
const outputAdj6 = document.getElementById('user-adj-6');
const outputVerb7 = document.getElementById('user-verb-7');
const outputAdj8 = document.getElementById('user-adj-8');
const outputNoun9 = document.getElementById('user-noun-9');
const outputNoun9a = document.getElementById('user-noun-9a');
const outputVerb10 = document.getElementById('user-verb-10');
const outputVerb11 = document.getElementById('user-verb-11');
const outputNoun12 = document.getElementById('user-noun-12');

// initialize state

// set event listeners to update state and DOM

createMadLib.addEventListener('click', () => {
    outputNoun1.textContent = inputNoun1.value;
    outputVerb2.textContent = inputVerb2.value;
    outputAdj3.textContent = inputAdj3.value;
    outputNoun4.textContent = " " + inputNoun4.value;
    outputVerb5.textContent = inputVerb5.value;
    outputAdj6.textContent = inputAdj6.value;
    outputVerb7.textContent = inputVerb7.value;
    outputAdj8.textContent = inputAdj8.value;
    outputNoun9.textContent = inputNoun9.value;
    outputNoun9a.textContent = inputNoun9.value;
    outputVerb10.textContent = inputVerb10.value;
    outputVerb11.textContent = inputVerb11.value;
    outputNoun12.textContent = inputNoun12.value;

    inputBox.style.display = 'none';
    storyBox.style.display = 'block';
});

// this is a test

