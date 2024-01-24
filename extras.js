var script = document.getElementById("extraScript");
var codeRunnerVar = "alert(JSON.stringify(script.parentElement.contentWindow.unityInstance));";

alert("Launched With Extras!");
if (script.armor == true) {
  alert("With Infinite Armor!");
}

document.onkeydown = function(e) {
  if (e.keyCode == 221) {
    eval(codeRunnerVar);
  }
  if (e.keyCode == 219) {
    codeRunnerVar = prompt("Code?", codeRunnerVar);
  }
}
