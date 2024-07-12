import {useRouteError} from "react-router-dom";

const RouterErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default RouterErrorBoundary;
