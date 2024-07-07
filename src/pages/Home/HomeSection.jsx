const HomeSection = ({children, title}) => {
  return (
    <section className="p-4 pr-0 bg-neutral-300 dark:bg-black dark:border-gray-12">
      <h1 className="pl-3 text-lg font-bold tracking-wide opacity-80">
        {title}
      </h1>
      <div className="aa">{children}</div>
    </section>
  );
};

export default HomeSection;
