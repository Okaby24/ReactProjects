import "./../Settings/_Settings.scss";
let aminusClicks = 0;
function Aplus() {
  let root = document.documentElement;
  let currentFontSize = window.getComputedStyle(root).fontSize;
  let newFontSize = parseFloat(currentFontSize) + 2;
  root.style.fontSize = newFontSize + "px";
}

function Aminus() {
  let root = document.documentElement;

  if (aminusClicks === 0) {
    root.style.fontSize = "16px";
  } else {
    let currentFontSize = window.getComputedStyle(root).fontSize;
    let newFontSize = parseFloat(currentFontSize) - 2;

    if (newFontSize >= 10) {
      root.style.fontSize = newFontSize + "px";
    }
  }

  aminusClicks++;
}

function Settings() {
  <div className="settings-container">
    <div className="settings-button">
      <span className="icon-settings"></span>
      <span className="icon-close">X</span>
    </div>
    <div className="settings-expanded">
      <span className="icon-A_plus" onClick={Aplus}></span>
      <span className="icon-A_minus" onClick={Aminus}></span>
      <span className="icon-circle"></span>
    </div>
  </div>;
}

export default Settings;
