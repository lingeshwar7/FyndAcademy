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
  alert(null);
  modal.style.display = "none";
}


// area


