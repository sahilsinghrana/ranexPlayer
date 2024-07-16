const HomeSection = ({children, title}) => {
  return (
    <section className="p-4 px-1 bg-stone-900 backgroundStars">
      <h1 className="pl-3 font-semibold tracking-wide text-md opacity-70 text-neutral-400">
        {title}
      </h1>
      <div>{children}</div>
    </section>
  );
};

export default HomeSection;
