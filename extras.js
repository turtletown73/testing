var script = document.getElementById("extraScript");

alert("Launched With Extras!");
if (script.armor == true) {
  alert("With Infinite Armor!");
}

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    alert(script.parentElement.contentWindow.unityInstance);
  }
}, false);
