import { FC, ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// import useAuth from "src/hooks/useAuth";
import AuthLayout from "../../layouts/auth";
import Login from "../../pages/auth/Login";

interface AuthenticatedProps {
  children: ReactNode;
}

const Authenticated: FC<AuthenticatedProps> = (props: { children: any }) => {
  const { children } = props;
  let navigate = useNavigate();
  // const auth = useAuth();
  const auth = useSelector((state) => state.auth);
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!auth.isLoggedIn) {
    // navigate("/login");
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }
    return <Login />;
  }

  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};

Authenticated.propTypes = {
  children: PropTypes.node
};

export default Authenticated;
