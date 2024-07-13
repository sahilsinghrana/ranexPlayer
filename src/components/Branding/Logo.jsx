import logoRed from "../../assets/images/logo_red.png";
import {getRandomRoundedLogoPath} from "../../assets/images/logos/roundedLogos";
import {clsxWithMerge} from "../../utils/utils";

import {Link} from "react-router-dom";

const randomLogoPath = getRandomRoundedLogoPath();

const Logo = ({className}) => {
  return (
    <Link to="/" className={clsxWithMerge("flex items-center ", className)}>
      <img
        className="object-cover w-full h-full rounded-full bg-red-950"
        src={randomLogoPath}
        alt="Ranex Player Logo"
      />
      <img className={"h-[60%]"} src={logoRed} alt="Ranex Player Logo" />
    </Link>
  );
};

export default Logo;
