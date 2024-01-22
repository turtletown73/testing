var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var hasExtras = false;
var iframe = document.getElementById("frame");
var current = 0;
var win = iframe.contentWindow || iframe;
var fullscreen = 0;

document.onkeydown = function (e) {
  if (hasExtras == false) {
    if (e.keyCode == konami[current]) {
      current++;
      if (current == 10) {
        hasExtras = true;
        alert('"extras" enabled!');
      }
    }
    else {
      current = 0;
    }
  }
  else {
    if (e.keyCode == 220) {
      fullscreen = 1 - fullscreen;
      win.unityInstance.SetFullscreen(fullscreen);
    }
    if (e.keyCode == 221) {
      win.unityInstance.SendMessage("MainMenuManagers", "OnWebCallback");
    }
  }
}
