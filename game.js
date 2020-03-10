// Initialize UI Elements
let berryImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title

// Initialize Game Variables
let lives = 3
let score = 0
let opacity = 1
let winningNum = 5

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)
  berryImg = createImg('strawberry.png', 'strawberry image')
  berryImg.size(110, 120)

  // Setup Lives Display
  livesDisplay = createElement('h4', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height / 30)


  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'DIFFICULTY: ')
  difficultyLabel.position(width / 20, height / 10)
  difficultySlider = createSlider(1, 10, 2)
  difficultySlider.position(width / 20, height / 6)

  scoreDisplay = createElement('h4', 'SCORE: ' + score)
  scoreDisplay.position(width/ 20, height/ 15)
  
  berryImg.mousePressed(increaseScore)
}

function draw() {
  // Adjust frameRate according to slider
  frameRate(difficultySlider.value());

  // Randomly Position Strawberry
  berryImg.position(random(width), random(height))
  
}

function mousePressed() {
  if (dist(mouseX, mouseY, berryImg.x, berryImg.y) > 200) {
    decreaseLives()
  }
}

function increaseScore() {
  score = score + 1;
  scoreDisplay.html('SCORE: ' + score)
  checkWin()
}

function decreaseLives() {
  lives = lives - 1
  livesDisplay.html('LIVES: ' + lives)
  checkLose()
}

function checkWin() {
  if(score >= winningNum){
    window.sessionStorage.setItem('score', score)
    window.location.href = 'win.html'
  }
}

function checkLose() {
  if(lives <= 0){
    window.sessionStorage.setItem('score', score)
    window.location.href = 'lose.html'
  }
}