let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];
 
btn.onclick = function() {
  modal.style.display = "block";
  
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

f.onsubmit = function(){
  alert("Thank you for your interest in volunteering for tree plantation!");
  // mirror.value = "thans";
  modal.style.display = "none";
  return false;
}

zero.onclick = function(){
  // alert(null);
  modal.style.display = "none";
}


// area

const form = document.querySelector('#request-form');

// Add a submit event listener
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the input fields
  const nameInput = form.querySelector('#name');
  const emailInput = form.querySelector('#email');
  const phoneInput = form.querySelector('#phone');
  const addressInput = form.querySelector('#address');
  const cityInput = form.querySelector('#city');
  const stateInput = form.querySelector('#state');
  const zipInput = form.querySelector('#zip');
  const reasonInput = form.querySelector('#reason');
  const sizeInput = form.querySelector('#size');
  const conditionInput = form.querySelector('#condition');
  const ownerInput = form.querySelector('#owner');
  const coordinationInput = form.querySelector('input[name="coordination"]:checked');
  const requestInput = form.querySelector('#request');
  const otherInput = form.querySelector('#other');

  // Validate the input fields
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
  } else if (emailInput.value.trim() === '') {
    alert('Please enter your email.');
    emailInput.focus();
  } else if (!isValidEmail(emailInput.value.trim())) {
    alert('Please enter a valid email address.');
    emailInput.focus();
  } else if (phoneInput.value.trim() === '') {
    alert('Please enter your phone number.');
    phoneInput.focus();
  } else if (!isValidPhone(phoneInput.value.trim())) {
    alert('Please enter a valid phone number.');
    phoneInput.focus();
  } else if (addressInput.value.trim() === '') {
    alert('Please enter your address.');
    addressInput.focus();
  } else if (cityInput.value.trim() === '') {
    alert('Please enter your city.');
    cityInput.focus();
  } else if (stateInput.value.trim() === '') {
    alert('Please enter your state.');
    stateInput.focus();
  } else if (zipInput.value.trim() === '') {
    alert('Please enter your zip code.');
    zipInput.focus();
  } else if (reasonInput.value.trim() === '') {
    alert('Please enter the reason for your request.');
    reasonInput.focus();
  } else if (sizeInput.value.trim() === '') {
    alert('Please enter the size of the area.');
    sizeInput.focus();
  } else if (conditionInput.value.trim() === '') {
    alert('Please enter the current condition of the area.');
    conditionInput.focus();
  } else if (ownerInput.value.trim() === '') {
    alert('Please enter the owner of the property.');
    ownerInput.focus();
  } else if (!coordinationInput) {
    alert('Please select whether you are willing to coordinate with the event organizers for the plantation process.');
  } else {
    // If all fields are valid, submit the form and show alert message
    alert('Thank you for your request!');
    form.reset(window.location.reload());
  }
});

// Helper function to validate email
function isValidEmail(email) {
  // Regular expression to validate email format
  const emailPattern = /^\S+@\S+\.\S+$/;
  return emailPattern.test(email);
}

// Helper function to validate phone number
function isValidPhone(phone) {
  // Regular expression to validate phone format
  const phonePattern = /^\d{10}$/;
  return phonePattern.test(phone);
}




function calculate() {
	// get user input
	var species = document.getElementById("species").value;
	var age = document.getElementById("age").value;
	var number = document.getElementById("number").value;

	// calculate carbon emissions
	var carbonEmissions = age * number * 22;

	// display result to user
	var resultDiv = document.getElementById("result-b");
	resultDiv.innerHTML = "Planting " + number + " " + species + " trees can offset " + carbonEmissions + " pounds of carbon emissions per year.";
}



// 

const emissionsInput = document.getElementById("emissions");
const captureRateInput = document.getElementById("capture-rate");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result-c");

calculateBtn.addEventListener("click", () => {
  const emissions = Number(emissionsInput.value);
  const captureRate = Number(captureRateInput.value);
  const capturedEmissions = emissions * (captureRate / 100);
  const netEmissions = emissions - capturedEmissions;
  resultDiv.textContent = `Annual net carbon emissions: ${netEmissions} tonnes`;
});



const calculateBtnC = document.getElementById('calculateBtn');

calculateBtnC.addEventListener('click', function() {
  const treeWidth = document.getElementById('treeWidth').value;
  const spacing = document.getElementById('spacing').value;

  const treeSpacing = parseInt(spacing) + parseInt(treeWidth);
  const distance = Math.ceil(treeSpacing / 2);

  const output = document.getElementById('output');
  output.innerHTML = `The tree spacing is ${treeSpacing} feet and the recommended distance between trees is ${distance} feet.`;
});
