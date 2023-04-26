import SidebarGroupTitle from './SidebarGroupTitle.jsx';

function SidebarGroup({title = '', children}) {
  return (
    <div className="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
      <SidebarGroupTitle title={title} />
      {children}
    </div>
  );
}

export default SidebarGroup;
