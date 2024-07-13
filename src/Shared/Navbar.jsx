import { Link } from "react-router-dom";

const Navbar = () => {

  const links = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Shop</Link>
      </li>
      <li>
        <Link>Contact Us</Link>
      </li>
      <li>
        <Link>About Us</Link>
      </li>
    </>
  );
  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu font-semibold menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      <Link to='/'>
      <img className="w-[125px] h-[125px]" src="/images/logo.png" alt="" />
      </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn bg-gradient-to-r from-blue-200 to-cyan-200 hover:bg-bg-gradient-to-r from-blue-200 to-cyan-400">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
