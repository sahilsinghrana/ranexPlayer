import logoRed from "../../assets/images/logo_red.png";
import {getRandomRoundedLogoPath} from "../../assets/images/logos/roundedLogos";

import {memo} from "react";
import {Link} from "react-router-dom";

const randomLogoPath = getRandomRoundedLogoPath();

const LogoBig = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        className="min-h-[80px] min-w-[80px] h-[80px] w-[80px] sm:h-[130px] sm:w-[130px] sm:min-h-[130px] sm:min-w-[130px] rounded-full object-cover bg-red-950"
        src={randomLogoPath}
        alt="Ranex Player Logo"
      />
      <img
        className="h-[60px] sm:h-[120px] "
        src={logoRed}
        alt="Ranex Player Logo"
      />
    </Link>
  );
};

export default memo(LogoBig);
