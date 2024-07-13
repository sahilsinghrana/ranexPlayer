const Card = ({children, backgroundImage}) => {
  return (
    <div
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: "cover",
      }}
      className="w-32 h-32 m-2 duration-100 rounded-md shadow-md cursor-pointer hover:shadow-lg shadow-gray-600/20 bg-slate-600 hover:-translate-y-1 "
    >
      {children}
    </div>
  );
};

export default Card;
