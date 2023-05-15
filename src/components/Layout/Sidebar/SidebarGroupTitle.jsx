function SidebarGroupTitle({title = ''}) {
  return (
    <div className="pl-4 text-textPrimary dark:text-textPrimaryDark font-bold text-xs text-[11px] uppercase">
      {title}
    </div>
  );
}

export default SidebarGroupTitle;
