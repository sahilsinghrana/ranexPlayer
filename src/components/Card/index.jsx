const Card = ({children}) => {
  return (
    <div className="w-32 h-32 bg-slate-800 m-2 rounded-sm p-2">{children}</div>
  );
};

Card.displayName = 'Card';

export default Card;
