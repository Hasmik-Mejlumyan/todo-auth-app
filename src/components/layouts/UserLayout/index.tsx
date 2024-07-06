import { Outlet, Link } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <header className="py-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h1>TodoS Logo</h1>
            <nav>
              <ul className="flex items-center justify-end gap-4 ">
                <li>
                  <Link className="text-blue-400 hover:text-blue-500" to="/">Todo List</Link>
                </li>
                <li>
                  <Link className="text-blue-400 hover:text-blue-500" to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
};

export default UserLayout;