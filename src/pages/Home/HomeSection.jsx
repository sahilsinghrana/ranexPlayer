const HomeSection = ({children, title}) => {
  return (
    <section className="p-2 px-1 sm:p-4 bg-stone-900 backgroundStars">
      <h1 className="pl-2 mb-1 font-semibold tracking-wide text-md opacity-70 text-neutral-400">
        {title}
      </h1>
      <div>{children}</div>
    </section>
  );
};

export default HomeSection;
