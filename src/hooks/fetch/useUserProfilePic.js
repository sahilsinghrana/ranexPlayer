import useUserProfile from "./useUserProfile";

import musicalSkull from "../../assets/images/musicalSkull.webp";

function useUserProfilePic() {
  const {user} = useUserProfile() || musicalSkull;
  const image = user?.picture || user?.avatar;
  return image;
}

export default useUserProfilePic;
