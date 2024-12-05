// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
// add an event listener on the target element

// callback function to handle event
document.getElementById("copy").onclick = function (event) {
  document.getElementById("output1").textContent =
    document.getElementById("userInput1").value;
};

// Exercise #2:
// when the user enters input text, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
// add an event listener on the target element
// callback function to handle event

document.getElementById("userInput2").oninput = function (event) {
  document.getElementById("output2").textContent =
    document.getElementById("userInput2").value;
};
