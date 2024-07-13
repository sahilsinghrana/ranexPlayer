import clsx from "clsx";

function Input({children, className, ...rest}) {
  return (
    <input
      className={clsx(
        "rounded-md p-3 bg-neutral-800 active:bg-neutral-800 outline-none",
        className
      )}
      {...rest}
    >
      {children}
    </input>
  );
}

export default Input;
