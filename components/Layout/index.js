import React, { useEffect } from "react";
// import Footer from '../Footer';
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar";
import { fetchAllCategories } from "../../store/actions/category";

function Layout({ children }) {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { push } = useRouter();

  useEffect(() => {
    const token = cookies.get("vZDA92AO3e0g");

    if (!token || token?.length !== 64) {
      push("/login");
    } else if (!categories?.length) dispatch(fetchAllCategories());
  }, []);

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-main">
        <main className="app-content">{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
