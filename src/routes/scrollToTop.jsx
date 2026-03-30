import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "instant"
    })
    ;
  }, [pathname]);
  return <Outlet />;
};

export default ScrollToTop;
