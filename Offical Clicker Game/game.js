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
  berryImg.size(130, 140)
  frameRate(1)

  // Setup Lives Display
  livesDisplay = createElement('h4', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height / 14)


  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'DIFFICULTY')

}

function draw() {
  // Adjust frameRate according to slider


  // Randomly Position Banana
  berryImg.position(random(width), random(height))


}

function mousePressed() {
  if (dist(mouseX, mouseY, berryImg.x, berryImg.y) > 200) {
    decreaseLives()
  }
}

function increaseScore() {

}

function decreaseLives() {

}

function checkWin() {


}

function checkLose() {

}