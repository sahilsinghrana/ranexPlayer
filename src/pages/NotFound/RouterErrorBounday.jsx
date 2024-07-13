import BaseButton from "../../components/Button/Button";

import {useRouteError} from "react-router-dom";

const RouterErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="font-extrabold tracking-widest text-9xl text-neutral-400">
        Something Went Wrong
      </h1>
      <BaseButton onClick={() => (window.location.href = "/")}>
        Reload
      </BaseButton>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default RouterErrorBoundary;
