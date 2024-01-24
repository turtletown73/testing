var script = document.getElementById("extraScript");
var iframe = document.getElementById("frame");
var windowThing = iframe.contentWindow;
var gameInstance = window.unityInstance;

alert("Launched With Extras!");
if (script.armor == true) {
  alert("With Infinite Armor!");
}

windowThing.document.onkeypress = function(e) {
  if (e.keyCode == 220) {
    alert(JSON.stringify(gameInstance));
  }
}
