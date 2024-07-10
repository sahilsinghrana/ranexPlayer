import {memo} from "react";

import "./MoonEclipseLoader.css";

function MoonEclipseLoader() {
  return (
    <div className="MoonEclipseLoader">
      <div className="moon">
        <div className="crater"></div>
        <div className="crater"></div>
        <div className="crater"></div>
      </div>
    </div>
  );
}

export default memo(MoonEclipseLoader);
