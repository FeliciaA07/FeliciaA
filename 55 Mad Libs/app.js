let outputDivUI
let inputDivUI

function setup() {
  createCanvas(windowWidth, windowHeight)
//   background('lightgray')

  addInputOutputElements()

  addTopic(
    'place',
    'My favorite place to go on vacation is ',
    '. Never have I been to a more disgusting place.',
    false,
    false,
    // ADD CODE: Add 4 more additional topics
  )

  addTopic(
      'person',
      'I wish ',
      ' would be the new president. You should vote for them.',
      false,
      false,
  )

  addTopic(
      'number',
      'You are ',
      ' years old. Looking good!',
      false,
      true,
  )

  addTopic(
      'verb ending in -ing',
      'My favorite activity is ',
      '. Scientists say you should do this every day to keep healthy.',
      true,
      false,
  )

  addTopic(
      'movie',
      'My favorite movie is ',
      '. It is a shame that it is not in theaters anymore.',
      false,
      false,
  )
  // Creates next button and styles it
  const outputDisplayBtn = createButton('NEXT')
  outputDisplayBtn.mousePressed(showOutputHandler)
  outputDisplayBtn.parent(inputDivUI)
  // ADD CODE: call .parent() to attach the button to the inputDivUI

  function showOutputHandler() {
    outputDivUI.show()
    // ADD CODE: Hide the inputDivUI
    inputDivUI.hide()
  }
}

function addInputOutputElements() {
  createElement('h1', 'Mad Libs Game')
  createElement('h4', 'Enter Some Text to See The Result')

  inputDivUI = createDiv('').id('inputs')
  outputDivUI = createDiv('').id('outputs')
  outputDivUI.hide()
}

function addTopic(topic, intro, detail, uppercase, num) {
  createElement('p', `Name a ${topic.toUpperCase()}`)
    .id('input-label')
    .parent(inputDivUI)

  const inputFieldUI = createInput(' ')
    .id('input-field')
    .parent(inputDivUI)

  inputFieldUI.changed(updateOutputHandler)

  function updateOutputHandler() {
    const output = createP('').parent(outputDivUI)
    // ADD CODE: convert the user input to lowercase by default
    let userInput = inputFieldUI.value().toLowerCase()

    // ADD CODE: convert to uppercase
    if (uppercase === true) {
        
      // ADD CODE: reassign userInput to be userInput.toUpperCase()
      userInput = userInput.toUpperCase()
    }
if (num === true) {
    userInput = Number(userInput)
    userInput = `${userInput + 30}`
}
    // ADD CODE: CONVERT TO NUM
    // add if() statement that checks to see iff num === true.
    // if true, convert userInput to a number and perform some math on it
   
    // OUTPUT BACK TO USER IN THE OUTPUT FIELD
    output.html(`${intro}${userInput}${detail}`)
  }
}