import { useRef, useEffect, useState } from "react";
import "./../Settings/_Settings.scss";

let aminusClicks = 0;

function Aplus() {
  const root = document.documentElement;
  const currentFontSize = window.getComputedStyle(root).fontSize;
  const newFontSize = parseFloat(currentFontSize) + 2;
  root.style.fontSize = newFontSize + "px";
}

function Aminus() {
  const root = document.documentElement;

  if (aminusClicks === 0) {
    root.style.fontSize = "16px";
  } else {
    const currentFontSize = window.getComputedStyle(root).fontSize;
    const newFontSize = parseFloat(currentFontSize) - 2;

    if (newFontSize >= 10) {
      root.style.fontSize = newFontSize + "px";
    }
  }

  aminusClicks++;
}

function Settings() {
  const settingsButtonRef = useRef(null);
  const settingsContainerRef = useRef(null);
  const settingsExpandedRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const settingsButton = settingsButtonRef.current;
    

    const handleClick = () => {
      setIsExpanded((prev) => !prev);
    };

    if (settingsButton) {
      settingsButton.addEventListener("click", handleClick);
    }

    return () => {
      if (settingsButton) {
        settingsButton.removeEventListener("click", handleClick);
      }
    };
  }, []);

  useEffect(() => {
    const settingsExpanded = settingsExpandedRef.current;
    if (settingsExpanded) {
      if (isExpanded) {
        const expandedHeight = settingsExpanded.scrollHeight + "px";
        settingsExpanded.style.height = expandedHeight;
        settingsExpanded.style.opacity = "1";
      } else {
        settingsExpanded.style.height = "0";
        settingsExpanded.style.opacity = "0";
      }
    }
  }, [isExpanded]);

  return (
    <div ref={settingsContainerRef} className="settings-container">
      <div ref={settingsButtonRef} className="settings-button">
        <span className="icon-settings"></span>
        <span className="icon-close">X</span>
      </div>
      <div ref={settingsExpandedRef} className="settings-expanded">
        <span className="icon-A_plus" onClick={Aplus}></span>
        <span className="icon-A_minus" onClick={Aminus}></span>
        <span className="icon-circle"></span>
      </div>
    </div>
  );
}

export default Settings;
