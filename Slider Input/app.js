let colorSlider;
let saturationSlider;
let brightSlider;
let textInput;

function setup() {
    colorSlider = createSlider(0, 360, 100);
    saturationSlider = createSlider(0, 360, 100);
    brightSlider = createSlider(0, 360, 100);
    textInput = createInput("hello")
    heading = createElement("h1", textInput);
    createCanvas(600, 120); 
    colorMode(HSB);
  }

  function draw() {
    background(colorSlider.value(), saturationSlider.value(), brightSlider.value());
    textSize(80);
    text(textInput.value(), 210, 100);
    heading.html(textInput.value())
  }
