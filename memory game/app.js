const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const createGridItems = () => {
  for (i = 1; i <= 20; i++) {
    const blankItem = itemTemplate.content.cloneNode(true);
    board.appendChild(blankItem);
    const appendedItem = board.querySelector('img:last-of-type');
    appendedItem.src = backUrl;
    appendedItem.classList.add(`${i}`);
    appendedItem.addEventListener('click', markFirstEl);
  }
};

const markFirstEl = (e) => {
  if (isFirstImageClicked === false) {
    isFirstImageClicked = true;
    e.target.src = shuffledArray[e.target.classList[1] - 1];
    markedElementHandler = e.target;
    e.target.removeEventListener('click',markFirstEl)
  } else {
    e.target.src = urlArray[e.target.classList[1] - 1];
    if (markedElementHandler.src === e.target.src) {
      markedElementHandler.style.backgroundColor = 'green';
      e.target.style.backgroundColor = 'green';
      e.target.removeEventListener('click', markFirstEl);
      pairCounter++;
    } else {
      markedElementHandler.style.backgroundColor = 'red';
      e.target.style.backgroundColor = 'red';
      document.body.style.pointerEvents = 'none';
      setTimeout(() => {
        document.body.style.pointerEvents = 'all';
        const images = document.querySelectorAll('img');
        for (image of images) {
          if (image.style.backgroundColor === 'red') {
            image.style.backgroundColor = 'lightblue';
            image.src = backUrl;
          }
        }
      }, 1000);
      markedElementHandler.addEventListener('click',markFirstEl)
    }
    isFirstImageClicked = false;
    markedElementHandler = null;
    counter++;
    if (pairCounter === 10) {
      setTimeout(() => {
        endGame(counter);
      }, 250);
    }
  }
};

const endGame = (moveNumber) => {
  alert(`You won! It took you ${moveNumber} tries. Click 'ok' to play again!`);
  shuffledArray = shuffleArray(urlArray);
  counter = 0;
  pairCounter = 0;
  const images = document.querySelectorAll('img');
  for (image of images) {
    image.parentElement.removeChild(image);
  }
  createGridItems();
};

const board = document.querySelector('.board');
const itemTemplate = document.querySelector('template');
const backUrl =
  'https://img.freepik.com/free-vector/abstract-watercolor-pastel-background_87374-139.jpg';
const urlArray = [
  'https://static.wikia.nocookie.net/leagueoflegends/images/1/17/Amumu_Render.png/revision/latest?cb=20200324143252',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/8771c35d-513d-4978-a7bf-ed2b6939c36f/d6znwb2-985086ee-ecaf-4554-8d9c-61932c3a6699.png',
  'https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Maokai_Render.png/revision/latest?cb=20181117002546',
  'https://static.wikia.nocookie.net/leagueoflegends/images/7/74/Veigar_Render.png/revision/latest?cb=20190111204310',
  'https://static.wikia.nocookie.net/leagueoflegends/images/b/b9/Ziggs_Render.png/revision/latest?cb=20200328134904',
  'https://static.wikia.nocookie.net/leagueoflegends/images/6/62/Skarner_Render.png/revision/latest?cb=20200504031019',
  'https://static.wikia.nocookie.net/p__/images/e/e3/Teemo_Render_2.png/revision/latest?cb=20210407171219&path-prefix=protagonist',
  'https://static.wikia.nocookie.net/p__/images/e/e8/Blitzcrank_Render_2.png/revision/latest?cb=20220108071433&path-prefix=protagonist',
  'https://static.wikia.nocookie.net/villains/images/3/3b/Nocturne_Render_3.png/revision/latest?cb=20210225202127',
  'https://static.wikia.nocookie.net/leagueoflegends/images/b/b0/Fizz_Render.png/revision/latest?cb=20200328140231',
  'https://static.wikia.nocookie.net/leagueoflegends/images/1/17/Amumu_Render.png/revision/latest?cb=20200324143252',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/8771c35d-513d-4978-a7bf-ed2b6939c36f/d6znwb2-985086ee-ecaf-4554-8d9c-61932c3a6699.png',
  'https://static.wikia.nocookie.net/leagueoflegends/images/a/ab/Maokai_Render.png/revision/latest?cb=20181117002546',
  'https://static.wikia.nocookie.net/leagueoflegends/images/7/74/Veigar_Render.png/revision/latest?cb=20190111204310',
  'https://static.wikia.nocookie.net/leagueoflegends/images/b/b9/Ziggs_Render.png/revision/latest?cb=20200328134904',
  'https://static.wikia.nocookie.net/leagueoflegends/images/6/62/Skarner_Render.png/revision/latest?cb=20200504031019',
  'https://static.wikia.nocookie.net/p__/images/e/e3/Teemo_Render_2.png/revision/latest?cb=20210407171219&path-prefix=protagonist',
  'https://static.wikia.nocookie.net/p__/images/e/e8/Blitzcrank_Render_2.png/revision/latest?cb=20220108071433&path-prefix=protagonist',
  'https://static.wikia.nocookie.net/villains/images/3/3b/Nocturne_Render_3.png/revision/latest?cb=20210225202127',
  'https://static.wikia.nocookie.net/leagueoflegends/images/b/b0/Fizz_Render.png/revision/latest?cb=20200328140231',
];
let shuffledArray = shuffleArray(urlArray);
let isFirstImageClicked = false;
let markedElementHandler;
let counter = 0;
let pairCounter = 0;

createGridItems();
