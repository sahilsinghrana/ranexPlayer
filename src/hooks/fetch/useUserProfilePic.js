import useUserProfile from "./useUserProfile";

import musicalSkull from "../../assets/images/musicalSkull.webp";

function useUserProfilePic() {
  const {user} = useUserProfile();
  const image = user?.picture || user?.avatar;
  return image || musicalSkull;
}

export default useUserProfilePic;
