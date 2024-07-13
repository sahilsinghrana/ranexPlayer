const HomeSection = ({children, title}) => {
  return (
    <section className="p-4 px-1 bg-stone-900 backgroundStars">
      <h1 className="pl-3 text-lg font-bold tracking-wide opacity-80">
        {title}
      </h1>
      <div className="aa">{children}</div>
    </section>
  );
};

export default HomeSection;
