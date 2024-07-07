// import logoBlue from "../../assets/images/logo_blue.png";
import logoRed from "../../assets/images/logo_red.png";

import {Link} from "react-router-dom";

const LogoBig = () => {
  return (
    <Link to="/">
      {/* <h1 className="text-8xl font-extrabold tracking-[10px] text-textPrimary dark:text-textPrimaryDark ">
        DiZi
      </h1> */}
      <img
        className=" h-[80px] sm:h-[130px]"
        src={logoRed}
        alt="Ranex Player Logo"
      />
    </Link>
  );
};

export default LogoBig;
