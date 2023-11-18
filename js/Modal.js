var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");
var spanFooter = document.getElementById("closeModalFooter");
var submitButton = document.getElementById("submitForm");

submitButton.onclick = function() {
  location.reload();
}
btn.onclick = function() {
  modal.style.display = "block";
  modal.classList.remove('close');
  modal.classList.add('open');
  overlay.style.display = "block";
}

span.onclick = function() {
 modal.classList.remove('open');
  modal.classList.add('close');
  overlay.style.display = "none";
  setTimeout(function() { modal.style.display = "none"; }, 500);
}


spanFooter.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

