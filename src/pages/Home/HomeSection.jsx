const HomeSection = ({children, title}) => {
  return (
    <section className="p-4 pr-0 my-2 bg-subtleBackground dark:bg-subtleBackgroundDark">
      <h1 className="text-text dark:text-textDark">{title}</h1>
      <div className="aa">{children}</div>
    </section>
  );
};

HomeSection.displayName = "HomeSection";

export default HomeSection;
