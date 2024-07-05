import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="text-4xl text-center  font-extrabold tracking-[10px] text-textPrimary dark:text-textPrimaryDark ">
        DiZi
      </h1>
    </Link>
  );
};

export default Logo;
