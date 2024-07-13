const HorizontalList = ({children}) => {
  return (
    <ul className="flex flex-wrap items-center justify-center sm:justify-start whitespace-nowrap">
      {children}
    </ul>
  );
};

export default HorizontalList;
