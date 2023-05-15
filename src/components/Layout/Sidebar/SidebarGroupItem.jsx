import clsx from 'clsx';

function SidebarGroupItem({name = '', Icon, active}) {
  return (
    <div className="w-full flex items-center gap-x-1.5 group select-none">
      <div className="relative w-1 h-8 overflow-hidden transition-colors duration-200 bg-transparent rounded-xl">
        <div
          className={clsx(
            'absolute top-0 left-0 w-full h-[102%] bg-secondary-9 dark:bg-secondary-9 transition-all duration-300',
            {
              'translate-y-full group-hover:translate-y-0 ': !active,
              'group-hover:translate-y-0 translate-y-0': active,
            }
          )}
        ></div>
      </div>
      <div
        className={clsx(
          ' w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white text-textSecondary dark:text-textSecondaryDark dark:hover:text-textPrimaryDark text-sm  hover:cursor-pointer',
          {
            'group-hover:bg-hoverBackground dark:hover:bg-hoverBackgroundDark':
              !active,
            'bg-white/10 text-primary dark:text-textPrimaryDark font-bold group-hover:bg-hoverSolidBackground/10 dark:group-hover:bg-hoverSolidBackgroundDark/10':
              active,
          }
        )}
        href="#"
      >
        {Icon && <Icon />}
        <span className="font-QuicksandMedium">Discovery</span>
      </div>
    </div>
  );
}

export default SidebarGroupItem;
