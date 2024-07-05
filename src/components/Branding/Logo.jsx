// import logoBlue from "../../assets/images/logo_blue.png";
import logoRed from "../../assets/images/logo_red.png";

import clsx from "clsx";
import {Link} from "react-router-dom";

const Logo = ({className}) => {
  return (
    <Link to="/">
      {/* <h1 className="text-4xl text-center  font-extrabold tracking-[10px] text-textPrimary dark:text-textPrimaryDark ">
        DiZi
      </h1> */}
      <img
        className={clsx("h-[50px]", className)}
        src={logoRed}
        alt="Ranex Player Logo"
      />
    </Link>
  );
};

export default Logo;
