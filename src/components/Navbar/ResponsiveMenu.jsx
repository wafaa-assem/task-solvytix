import { NavLink } from "react-router-dom";

const ResponsiveMenu = ({ isOpen }) => {
  return (
    isOpen && (
      <div className="fixed top-12 left-0 w-full lg:hidden z-[9999]">
        <div className="py-10 m-7 rounded-lg bg-[#f0f3f2]">
          <ul className="flex flex-col justify-center items-center gap-5 uppercase font-medium text-sm">
            <li>
              <NavLink
                className="px-5 text-[#6b7280] hover:text-[#09c] font-bold duration-200"
                to="/"
              >
                home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default ResponsiveMenu;
