const getRandomSample = (arr, n) => {
  let result = new Array(n)
  let len = arr.length
  let taken = new Array(len)
  if (n > len) throw new RangeError("getRandom: more elements taken than available")
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
}

const range = to => Array.from({length: to}, (v, k) => k+1); 
const randInt = (max, min=0) => Math.floor(Math.random() * (max - min + 1)) + min;

const cardSuits = ['wands', 'pentacles', 'swords', 'cups']
const cardRanks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "king", "queen", "knight", "page"]
const majorArcanas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"].map(n => `./images/tarot/major/${n}.jpg`)
const flatMap = (f, arr) => arr.reduce((x, y) => [...x, ...f(y)], [])
const minorArcanas = flatMap(s => cardRanks.map(r => `./images/tarot/${s}/${r}.jpg`), cardSuits)
const completeDeck = majorArcanas.concat(minorArcanas)

const readCards = (num=1) => getRandomSample(completeDeck, num)
const readCard = () => readCards(1)[0]

$(() => {
  const cardsEl = $('#cards')
  $('#showcard').click(() => {
    const image = $(`<img width=300 src="${readCard()}" />`)
    cardsEl.html(image)
  })
})
