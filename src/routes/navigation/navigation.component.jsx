import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div class="navigation">
        <Link className="logo-container" to="/home">
          <div>Logo</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
