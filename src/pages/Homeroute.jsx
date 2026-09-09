import Header from "../components/navbar/Header"
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion as Motion } from "motion/react";
import Footer from '../components/footer/Footer'

const Homeroute = () => {
  const location = useLocation();

  return (
    <>
    <Header/>
    <AnimatePresence mode="wait">
      <Motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <Outlet />
      </Motion.main>
    </AnimatePresence>
    <Footer />
    </>
  )
}

export default Homeroute;