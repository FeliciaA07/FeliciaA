let outputDivUI
let inputDivUI

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  addInputOutputElements()

  addTopic("place", "I once lived with my pet in a place called ", ". Never have I been to a more disgusting place where tyrannical gnomes rule.")

  // Creates next button and styles it
  let outputDisplayBtn = createButton('NEXT')
  outputDisplayBtn.mousePressed(showOutputHandler)

  function showOutputHandler() {
    outputDivUI.show()

  }
}

function addInputOutputElements() {
  createElement('h1', 'Mad Libs Game')
  createElement('h4', 'Enter Some Text to See The Result')

  inputDivUI = createDiv('').id('inputs')
  outputDivUI = createDiv('').id('outputs')
  outputDivUI.hide()
}

function addTopic(topic, intro, detail) {
  createElement('p', 'Name a ' + topic.toUpperCase()).id('input-label').parent(inputDivUI)

  let inputFieldUI = createInput(' ').id('input-field').parent(inputDivUI)

  inputFieldUI.changed(updateOutputHandler)

  let output = createP('').parent(outputDivUI)

  function updateOutputHandler() {
    output.html(intro + inputFieldUI.value() + detail)
  }
}





// let string = 'my name is Felicia'

// console.log(string.length)

// let num = 13
// let s = num.toString()

// s = string.search('F')

// s = string.startsWith('e')

// s = string.includes('F')

// // modifying string (important for if statements)
// s = string.toLowerCase()
// s = string.toUpperCase()
// s = string.concat(' i is tired')
// s = string.slice(3, 7);
// s = string.trim()

// console.log(s)

// // convert to number
// string = 3
// num = Number(string)
// console.log(typeof num, num)