// Function to display the selected tool and hide others
function showTool(toolId) {
  // Hide all tools
  const tools = document.querySelectorAll(".tool");
  tools.forEach((tool) => (tool.style.display = "none"));

  // Show the selected tool
  document.getElementById(toolId).style.display = "block";
}

// Calculator Function
function calculate() {
  // Get input values and operator
  const num1 = parseFloat(document.getElementById("calc-input1").value);
  const num2 = parseFloat(document.getElementById("calc-input2").value);
  const operator = document.getElementById("calc-operator").value;

  // Perform calculation based on the operator
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }

  // Display result
  document.getElementById("calc-result").textContent = "Result: " + result;
}

// Unit Converter Function
function convertToMiles() {
  // Get input value in kilometers
  const km = parseFloat(document.getElementById("kmInput").value);

  // Convert kilometers to miles
  const miles = km * 0.621371;

  // Display result
  document.getElementById("mileResult").textContent =
    "Miles: " + miles.toFixed(2);
}

// Notepad Function with Local Storage
function saveNote() {
  // Get note input value
  const note = document.getElementById("notepadInput").value;

  // Save note to local storage
  localStorage.setItem("savedNote", note);

  // Display saved note
  document.getElementById("savedNote").textContent = note;
}

// Load saved note on page load
window.onload = function () {
  const savedNote = localStorage.getItem("savedNote");
  if (savedNote) {
    document.getElementById("savedNote").textContent = savedNote;
  }
};
