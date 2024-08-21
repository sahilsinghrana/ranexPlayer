import clsx from "clsx";

function Input({children, className, ...rest}) {
  return (
    <input
      className={clsx(
        "rounded-md px-2 bg-neutral-600 duration-300 focus:bg-neutral-700 active:bg-neutral-700 outline-none",
        className
      )}
      {...rest}
    >
      {children}
    </input>
  );
}

export default Input;
