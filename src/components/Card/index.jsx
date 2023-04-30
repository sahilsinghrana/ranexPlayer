const Card = ({children}) => {
  return (
    <div className="w-32 h-32 bg-slate-400 dark:bg-slate-800 m-2 rounded-sm p-2 cursor-pointer transition-transform hover:-translate-y-1">
      {children}
    </div>
  );
};

Card.displayName = 'Card';

export default Card;
