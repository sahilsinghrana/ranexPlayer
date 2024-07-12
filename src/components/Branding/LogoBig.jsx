import logoRed from "../../assets/images/logo_red.png";
import {getRandomRoundedLogoPath} from "../../assets/images/logos/roundedLogos";

import {Link} from "react-router-dom";

const LogoBig = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        className="min-h-[80px] h-[80px] sm:h-[130px] sm:min-h-[130px] rounded-full object-cover bg-red-950"
        src={getRandomRoundedLogoPath()}
        alt="Ranex Player Logo"
      />
      <img
        className=" h-[70px] sm:h-[120px]"
        src={logoRed}
        alt="Ranex Player Logo"
      />
    </Link>
  );
};

export default LogoBig;
