var script = document.getElementById("extraScript");
var iframe = script.parentElement;
var windowThing = iframe.contentWindow;
var gameInstance = windowThing.unityInstance;

alert("Launched With Extras!");
if (script.armor == true) {
  alert("With Infinite Armor!");
}

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    alert(iframe.contentWindow.unityInstance);
  }
}, false);
