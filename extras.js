var script = document.getElementById("extraScript");
var iframe = document.getElementById("frame");
var window = iframe.contentWindow;
var gameInstance = window.unityInstance;

alert("Launched With Extras!");
if (script.armor == true) {
  alert("With Infinite Armor!");
}
