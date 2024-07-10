import {ListBulletIcon} from "@radix-ui/react-icons";
import {useLocation, useNavigate} from "react-router-dom";

function PlaylistLinkButton() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(location.pathname === "/now-playing" ? -1 : "/now-playing");
      }}
    >
      <div className="p-2 py-3 mx-1 text-black bg-white cursor-pointer">
        <ListBulletIcon />
      </div>
    </button>
  );
}

export default PlaylistLinkButton;
