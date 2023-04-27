import SidebarGroup from './SidebarGroup';
import SidebarGroupItem from './SidebarGroupItem';

const Sidebar = () => {
  return (
    <aside className="w-60 dark:bg-backgroundDarker bg-slate-500 h-full flex flex-col items-center pt-5 pb-2 space-y-7">
      <SidebarGroup title="Group 1">
        <SidebarGroupItem name={'Group Item1'} active={true} />
      </SidebarGroup>
      <SidebarGroup title="Group 2">
        <SidebarGroupItem name={'Group Item2'} />
        <SidebarGroupItem name={'Group Item3'} />
      </SidebarGroup>
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
