function setup() {
    createCanvas(windowWidth, windowHeight)
  background('lightblue')
  // Setup Instructions heading
  const heading = createElement('h1', 'Click the Button to Start the Game!')
  heading.style('font-family: papyrus')
  heading.style('font-size: 50px')
  heading.style('text-align: center')
  heading.style('position: absolute')
  heading.style('width: 100%')
  heading.style('top: 100px')

  gameDescription = createElement('p', 'You have 3 lives to click the strawberry. You lose a life if you click and miss the strawberry. Click the strawberry 5 times to win.')
  gameDescription.style('font-family: comic sans ms')
  gameDescription.style('font-size: 25px')
  gameDescription.style('position: absolute')
  gameDescription.style('width: 100%')
  gameDescription.style('text-align: center')
  gameDescription.style('top: 35%')

  button = createButton('Play Game!');
    button.position(width/2, height/2);
    button.mousePressed(goToLink);
    button.style('left: auto')
    button.style('right: auto')
}

function goToLink() {
    window.location.href ='game.html';
}