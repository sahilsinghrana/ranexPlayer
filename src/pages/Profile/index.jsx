import MoonLoader from "../../components/Loaders/MoonLoader";
import useUserProfile from "../../hooks/fetch/useUserProfile";
import useUserProfilePic from "../../hooks/fetch/useUserProfilePic";

function ProfilePage() {
  const {user, isLoading} = useUserProfile();
  const profileSrc = useUserProfilePic();

  const fullName = user?.full_name;
  const email = user?.email;

  return (
    <div className="w-full p-4">
      {isLoading ? (
        <MoonLoader />
      ) : (
        <>
          <div className="flex flex-col items-center justify-center w-full gap-3 text-center">
            <img
              src={profileSrc}
              alt="profilepic"
              className="bg-neutral-400 object-cover w-[130px] h-[130px]  rounded-full border-neutral-900 border-2"
            />
            <div>
              <h2 className="text-xl font-bold tracking-widest uppercase text-neutral-50">
                {fullName}
              </h2>
              <h3 className="text-sm italic font-light">
                {email || "@acoolastronaut"}
              </h3>
            </div>
          </div>
          <div className="flex justify-center mt-8 gap-9">
            <div>
              <h2 className="font-bold text-md">Recently Played</h2>
              <ul className="pl-3 text-base">
                <li>Song Name</li>
                <li>Song Name2</li>
                <li>Song Name3</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-md">Most Played</h2>
              <ul className="pl-3 text-base">
                <li>Song Name</li>
                <li>Song Name2</li>
                <li>Song Name3</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfilePage;
