import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../state/redux/auth/authSlice";
import { useSelector } from "react-redux";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(location.state?.from ? location.state.from : "/");
    }
  }, [isLoggedIn, navigate, location]);

  return <div>Register</div>;
};

export default Register;
