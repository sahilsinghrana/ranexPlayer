import {Link} from "react-router-dom";

const LogoBig = () => {
  return (
    <Link to="/">
      <h1 className="text-8xl font-extrabold tracking-[10px] text-textPrimary dark:text-textPrimaryDark ">
        DiZi
      </h1>
    </Link>
  );
};

export default LogoBig;
