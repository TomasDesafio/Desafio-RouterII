import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
    <div>
      <nav>
        <NavLink
          className={setActiveClass}
          to="/"
        >
          {" "}
          Home{" "}
        </NavLink>

        <NavLink
          className={setActiveClass}
          to="/personajes"
        >
          {" "}
          Personajes{" "}
        </NavLink>

      
      </nav>
    </div>
  );
};
export default Navbar;
