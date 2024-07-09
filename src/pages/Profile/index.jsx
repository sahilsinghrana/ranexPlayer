function ProfilePage() {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col items-center justify-center w-full gap-3 text-center">
        <img
          src=""
          alt="profilepic"
          className="bg-neutral-400 w-[130px] h-[130px]  rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold tracking-widest uppercase text-neutral-50">
            Space Explorer
          </h2>
          <h3 className="italic font-light">@acoolastronaut</h3>
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
    </div>
  );
}

export default ProfilePage;
