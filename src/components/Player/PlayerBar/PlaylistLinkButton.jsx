import BaseButton from "../../Button/Button";

import {ListBulletIcon} from "@radix-ui/react-icons";
import {useLocation, useNavigate} from "react-router-dom";

function PlaylistLinkButton() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <BaseButton
      onClick={() => {
        navigate(
          location.pathname.includes("/now-playing") ? -1 : "/now-playing"
        );
      }}
      className="h-[30px] w-[30px] bg-neutral-200 hover:bg-neutral-300 text-red-950 hover:text-red-900"
    >
      <ListBulletIcon />
    </BaseButton>
  );
}

export default PlaylistLinkButton;
