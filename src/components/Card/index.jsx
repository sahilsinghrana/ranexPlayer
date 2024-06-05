const Card = ({children}) => {
  return (
    <div className="w-32 h-32 p-2 m-2 transition-transform duration-300 rounded-sm shadow-md cursor-pointer hover:shadow-lg shadow-gray-11 dark:shadow-gray-11/20 bg-solidBackground dark:bg-solidBackgroundDark hover:bg-hoverElementBackgroundDark hover:-translate-y-1 text-gray-2 dark:text-grayDark-12 ">
      {children}
    </div>
  );
};

Card.displayName = "Card";

export default Card;
