import { Route, Navigate } from "react-router-dom";
import { LOGIN } from "../network/apiEndpoints";
// import ErrorBoundary from "./ErrorBoundary";

function ProtectedRoute({ component: Component, ...rest }: any) {
  const userToken = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  return (
    <Route
      {...rest}
      render={(props: any) => {
        if (userToken && userId) {
          return (
            <>
              {/* <ErrorBoundary> */}
              <Component {...rest} {...props} />
              {/* </ErrorBoundary> */}
            </>
          );
        } else {
          return <Navigate to={LOGIN} />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
