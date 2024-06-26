import { useState, useEffect } from 'react';
import {yupResolver} from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {signInScheme} from "../../../utils/schemes/signInScheme";
import {signUpScheme} from "../../../utils/schemes/signUpScheme";
import {ISignInData, ISignUpData} from "../../../types";
import {useAppDispatch, useAppSelector} from "../../../store";
import {signIn, signUp, selectVerificationEmail, selectIsVerificationEmailSent} from "../../../store/user";

const Auth = () => {
  const dispatch = useAppDispatch();
  const verificationEmail = useAppSelector(selectVerificationEmail);
  const isVerificationEmailSent = useAppSelector(selectIsVerificationEmailSent);
  const [isSignUp, setIsSignUp] = useState(false);

  const { register, handleSubmit, unregister } = useForm<ISignInData | ISignUpData>({
    resolver: yupResolver(isSignUp ? signUpScheme : signInScheme),
  });

  const handleFormSubmit = (data: ISignInData | ISignUpData) => {
    if (isSignUp) {
      const sendData = data as ISignUpData;
      dispatch(signUp(sendData));
    } else {
      const sendData = data as ISignInData;
      dispatch(signIn(sendData));
    }
  };

  useEffect(() => {
    if (isSignUp) {
      unregister('fullName');
      unregister('confirmPassword');
    }
  }, [isSignUp]);

  return (
    <form className="flex flex-col items-center justify-center gap-2" onSubmit={handleSubmit(handleFormSubmit)}>
      {isSignUp && <div className="flex flex-col items-start justify-center">
        <label htmlFor="fullname">Full name</label>
        <input {...register('fullName')} className="border border-sky-600 rounded p-2" type="text" id='fullname'/>
      </div>}

      <div className="flex flex-col items-start justify-center">
        <label htmlFor="email">Email</label>
        <input {...register('email')} className="border border-sky-600 rounded p-2" type="email" id='email'/>
      </div>

      <div className="flex flex-col items-start justify-center">
        <label htmlFor="password">Password</label>
        <input {...register('password')} className="border border-sky-600 rounded p-2" type="password" id='password'/>
      </div>

      {isSignUp && <div className="flex flex-col items-start justify-center">
        <label htmlFor="confirmPassword">Confirm password</label>
        <input {...register('confirmPassword')} className="border border-sky-600 rounded p-2" type="password"
               id='confirmPassword'/>
      </div>}

      <button
        className="bg-sky-600 text-white rounded p-2 w-full hover:bg-sky-700"
        type="submit"
      >
        {isSignUp ? 'Sign up' : 'Sign in'}
      </button>

      {verificationEmail && isVerificationEmailSent && (
        <p>
          Verification email sent to <span className="font-bold text-sky-600 underline">{verificationEmail}</span>.
        </p>
      )}

      <p className="mt-3">
        {isSignUp ? 'Already have an account? ' : 'Don\'t have an account? '}
        <button
          className="underline rounded p-2 text-sky-600"
          type="button"
          onClick={() => setIsSignUp(prev => !prev)}
        >
          {isSignUp ? 'Sign in' : 'Sign up'}
        </button>
      </p>
    </form>
  )
};

export default Auth;