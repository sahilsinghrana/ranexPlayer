const Card = ({children}) => {
  return (
    <div className="w-32 h-32 p-2 m-2 transition-transform duration-300 rounded-sm shadow-md cursor-pointer hover:shadow-lg shadow-gray-300/20 bg-slate-600 hover:bg-slate-800 hover:-translate-y-1 text-grayDark-12 ">
      {children}
    </div>
  );
};

export default Card;
