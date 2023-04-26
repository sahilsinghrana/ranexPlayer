import clsx from 'clsx';

function SidebarGroupItem({name = '', Icon, active}) {
  return (
    <div className="w-full flex items-center gap-x-1.5 group select-none">
      <div className="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
        <div
          className={clsx(
            'absolute top-0 left-0 w-full h-[102%] bg-red-600 transition-all duration-300',
            {
              'translate-y-full group-hover:translate-y-0 ': !active,
              'group-hover:translate-y-0 translate-y-0': active,
            }
          )}
        ></div>
      </div>
      <div
        className={clsx(
          ' w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm',
          {
            'group-hover:bg-white/10': !active,
            'bg-white/10 text-white group-hover:bg-white/10': active,
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
