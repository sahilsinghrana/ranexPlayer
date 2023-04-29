const HorizontalList = ({children}) => {
  return (
    <ul className="flex whitespace-nowrap overflow-x-auto ">{children}</ul>
  );
};

HorizontalList.displayName = 'HorizontalList';

export default HorizontalList;
