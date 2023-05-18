const HorizontalList = ({children}) => {
  return (
    <ul className="flex overflow-x-auto whitespace-nowrap ">{children}</ul>
  );
};

export default HorizontalList;
