const Card = ({children, backgroundImage}) => {
  console.log(backgroundImage);
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
      className="w-32 h-32 m-2 transition-transform duration-200 rounded-sm shadow-md cursor-pointer hover:shadow-lg shadow-gray-600/30 bg-slate-600 hover:bg-slate-800 hover:-translate-y-1 "
    >
      {children}
    </div>
  );
};

export default Card;
