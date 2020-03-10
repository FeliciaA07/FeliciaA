let button
let scoreDisplay

function setup() {
    createCanvas(windowWidth, windowHeight)
  background('lightgreen')
  
  const message = createElement('h1', 'YOU WIN!')
  message.style('font-family: papyrus')
  message.style('font-size: 50px')
  message.style('text-align: center')
  message.style('position: absolute')
  message.style('width: 100%')
  message.style('top: 100px')

  button = createButton('Play Again?');
    button.position(width/2, height/2);
    button.mousePressed(goToLink);
    button.style('left: auto')
    button.style('right: auto')
    let score = window.sessionStorage.getItem('score')
    scoreDisplay = createElement('h2', 'Score: ' + score)
    scoreDisplay.style('text-align: center')
    scoreDisplay.style('position: absolute')
    scoreDisplay.style('top: 35%')
    scoreDisplay.html('SCORE: ' + score)
}

function goToLink() {
    window.location.href ='game.html';
}