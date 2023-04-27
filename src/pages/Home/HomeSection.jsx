const HomeSection = ({children, title}) => {
  return (
    <section className="dark:bg-slate-950 p-4 my-2">
      <h1 className="text-slate-400">{title}</h1>
      <div>{children}</div>
    </section>
  );
};

HomeSection.displayName = 'HomeSection';

export default HomeSection;
