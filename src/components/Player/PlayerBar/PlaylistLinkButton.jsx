import {ListBulletIcon} from "@radix-ui/react-icons";
import {Link, useLocation} from "react-router-dom";

function PlaylistLinkButton() {
  const location = useLocation();
  return (
    <Link to={location.pathname === "/now-playing" ? "/" : "/now-playing"}>
      <div className="p-2 mx-1 text-white bg-black cursor-pointer dark:text-black dark:bg-white">
        <ListBulletIcon />
      </div>
    </Link>
  );
}

export default PlaylistLinkButton;
