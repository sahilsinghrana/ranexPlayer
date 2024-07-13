import logoRed from "../../assets/images/logo_red.png";
import {getRandomRoundedLogoPath} from "../../assets/images/logos/roundedLogos";
import {clsxWithMerge} from "../../utils/utils";

import {Link} from "react-router-dom";

const randomLogoPath = getRandomRoundedLogoPath();

const Logo = ({className}) => {
  return (
    <Link to="/" className="flex items-center">
      <img
        className="min-h-[35px] min-w-[35px] h-[35px] w-[35px] sm:h-[50px] sm:w-[50px] sm:min-h-[50px] sm:min-w-[50px] rounded-full object-cover bg-red-950"
        src={randomLogoPath}
        alt="Ranex Player Logo"
      />
      <img
        className={clsxWithMerge("h-[30px]", className)}
        src={logoRed}
        alt="Ranex Player Logo"
      />
    </Link>
  );
};

export default Logo;
