import clsx from "clsx";
import {memo} from "react";
import {twMerge} from "tailwind-merge";

function AlbumArt({className, src, alt = "cover Art", style}) {
  return (
    <img
      className={twMerge(
        clsx("bg-black h-14 w-14 rounded-md object-cover", className)
      )}
      style={style}
      src={src}
      alt={alt}
    />
  );
}

export default memo(AlbumArt);
