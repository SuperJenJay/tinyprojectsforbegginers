const input = document.querySelector('input');
const button = document.querySelector('button');

const count = () => {
  const text = input.value;
  if (text.trim() === '') {
    alert('Mariusz, wpisz normalny tekst, a nie sie wygłupiasz!');
    return;
  }
  formattedText = Array.from(text);
  let counter = 0;
  for (i = 0; i < formattedText.length; i++) {
    if (
      formattedText[i] === 'a' ||
      formattedText[i] === 'e' ||
      formattedText[i] === 'i' ||
      formattedText[i] === 'o' ||
      formattedText[i] === 'u' ||
      formattedText[i] === 'y'
    ) {
      counter++;
    }
  }
  if (counter === 1) {
    alert('This text has only 1 vowel!');
  } else {
    alert(`This text has ${counter} vowels!`);
  }
  input.value = '';
};

button.addEventListener('click', count);
