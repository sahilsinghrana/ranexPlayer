const HomeSection = ({children, title}) => {
  return (
    <section className="bg-slate-300 dark:bg-slate-950 p-4 pr-0 my-2">
      <h1 className="text-slate-400">{title}</h1>
      <div className="aa">{children}</div>
    </section>
  );
};

HomeSection.displayName = 'HomeSection';

export default HomeSection;
