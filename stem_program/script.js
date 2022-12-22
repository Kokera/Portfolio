/*
 You can change anything in these files--HTML tags, CSS styles, JavaScript functions, etc. 
 Do what you need to do to make it suitable for your STEM problem.

 The getInput function will take user input from the textbox with id="input1" on the page. 
 It will run when the user clicks on the GO button.
 You should call your functions from inside the getInput function.

 The writeOutput function will write some given text to the span element that has id="output1" on the page. 
 You can call this function from your code and give it your result.
*/

// This function will get the text entered into the "input" text field.
// Then it calls another function with the input as an argument.
function getInput() {
  let input_RED = document.querySelector("#input_r");
  let input_GREEN = document.querySelector("#input_g");
  let input_BLUE = document.querySelector("#input_b");
  
  // let input = input_RED.value;
  output_red = decimalToHex(input_RED.value, 2);
  output_green = decimalToHex(input_GREEN.value, 2);
  output_blue = decimalToHex(input_BLUE.value, 2);
  
  // do something with the input
  writeOutput("#" + output_red + output_green + output_blue);
  let pageBody = document.querySelector("body");
pageBody.style.backgroundColor = "#" + output_red + output_green + output_blue;
  
  // <-- replace this with YOUR CODE
}

function toHex(d) {
  return ("0" + (Number(d).toString(16))).slice(-2).toUpperCase()
}

function decimalToHex(d, padding) {
  var hex = Number(d).toString(16);
  padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

  while (hex.length < padding) {
    hex = "0" + hex;
  }

  return hex;
}
// This function will write some text to the output span on the page.
function writeOutput(text) {
  let outputSpan = document.querySelector("#output1");
  outputSpan.textContent = text;

}


document.querySelector("#buttonGo").addEventListener("click", getInput);

let pageBody = document.querySelector("body");
pageBody.style.backgroundColor = "#ffffff";