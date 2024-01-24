var script = document.getElementById("extraScript");
var codeRunnerVar = "alert(JSON.stringify(script.parentElement.contentWindow.unityInstance));";

alert("Launched With Extras!");
if (script.armor == true) {
  alert("With Infinite Armor!");
}

document.onkeydown = function(e) {
  if (e.keyCode == 90) {
    eval(codeRunnerVar);
  }
  if (e.keyCode == 88) {
    codeRunnerVar = prompt("Code?", codeRunnerVar);
  }
}
