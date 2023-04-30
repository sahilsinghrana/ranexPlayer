import SidebarGroup from './SidebarGroup';
import SidebarGroupItem from './SidebarGroupItem';

import sidebarAtom from '../../../store/atoms/layout/sidebar';

import clsx from 'clsx';
import {useAtom} from 'jotai';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useAtom(sidebarAtom);

  return (
    <div
      className={clsx(
        'bg-black/30 w-full md:w-2/6 xl:w-2/12 h-full absolute z-10 md:relative ',
        {
          'flex ': showSidebar,
          'hidden md:flex ': !showSidebar,
        }
      )}
      onClick={(e) => setShowSidebar((show) => !show)}
    >
      <aside
        className={clsx(
          'z-20 w-2/4 md:w-full dark:bg-backgroundDarker bg-slate-500 h-full flex-col items-center pt-5 pb-2 space-y-7'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <SidebarGroup title="Group 1">
          <SidebarGroupItem name={'Group Item1'} active={true} />
        </SidebarGroup>
        <SidebarGroup title="Group 2">
          <SidebarGroupItem name={'Group Item2'} />
          <SidebarGroupItem name={'Group Item3'} />
        </SidebarGroup>
      </aside>
    </div>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
