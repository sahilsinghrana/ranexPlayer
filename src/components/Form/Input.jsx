import clsx from "clsx";

function Input({children, className, ...rest}) {
  return (
    <input
      className={clsx("rounded-md p-2 bg-grayDark-5 text-white", className)}
      {...rest}
    >
      {children}
    </input>
  );
}

export default Input;
