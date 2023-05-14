const Card = ({children}) => {
  return (
    <div className="w-32 h-32 p-2 m-2 transition-transform rounded-sm cursor-pointer bg-solidBackground dark:bg-solidBackgroundDark hover:-translate-y-1 text-gray-12 dark:text-grayDark-12 ">
      {children}
    </div>
  );
};

Card.displayName = 'Card';

export default Card;
