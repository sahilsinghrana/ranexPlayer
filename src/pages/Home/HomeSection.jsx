const HomeSection = ({children, title}) => {
  return (
    <section className="p-4 pr-0 my-2 bg-subtleBackground dark:bg-subtleBackgroundDark">
      <h1 className="pl-3 text-lg font-bold tracking-wide opacity-80">
        {title}
      </h1>
      <div className="aa">{children}</div>
    </section>
  );
};

HomeSection.displayName = "HomeSection";

export default HomeSection;
