
const randInt = (max, min=0) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomMajorArcanaUrl = () => `./images/tarot/major/${randInt(21)}.jpg`

$(() => {
  const cardsEl = $('#cards')
  $('#showcard').click(() => {
    const image = $(`<img width=300 src="${randomMajorArcanaUrl()}" />`)
    cardsEl.html(image)
  })
})
