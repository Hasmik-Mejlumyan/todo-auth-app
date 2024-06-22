import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {verifyEmail, selectIsLoading, selectIsEmailVerified} from "../../../store/user";
import {useAppDispatch, useAppSelector} from "../../../store";

const VerifyEmail = () => {
  const dispatch = useAppDispatch();
  const { token } = useParams();

  const isLoading = useAppSelector(selectIsLoading);
  const isEmailVerified = useAppSelector(selectIsEmailVerified);


  useEffect(() => {
    if (token) {
      dispatch(verifyEmail(token));
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isEmailVerified ? (
      <p className="text-green-400">Email Verified. <Link className="underline text-blue-400" to="/auth">Login</Link></p>
    ) : (
      <p className="text-red-400">Not verified</p>
    )
  );
};

export default VerifyEmail;
