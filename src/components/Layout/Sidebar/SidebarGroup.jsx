import SidebarGroupTitle from "./SidebarGroupTitle.jsx";

function SidebarGroup({title = "", children}) {
  return (
    <div className="flex flex-col w-full pr-3 text-sm gap-y-1 text-textSecondary dark:text-textSecondaryDark fill-gray-5">
      <SidebarGroupTitle title={title} />
      {children}
    </div>
  );
}

export default SidebarGroup;
