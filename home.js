function alert_name() {
  //Create name variable
  var name = "Han";
  alert("My name is " + name + " :)")
}

function change_image() {
  var image = document.getElementById('flower_image');
  image.src = "april.jpg";
}

function increase() {
  var image = document.getElementById('BBH_image');
  image.style.height = "75%"
  image.style.width = "75%"
}

function decrease() {
  var image = document.getElementById('BBH_image');
  image.style.height = "60%"
  image.style.width = "60%"
}
