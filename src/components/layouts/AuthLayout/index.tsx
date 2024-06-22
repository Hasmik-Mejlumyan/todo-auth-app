import { Outlet } from "react-router-dom";


const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center">
      <div className="max-w-2xl w-full px-3 flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
};

export default AuthLayout;