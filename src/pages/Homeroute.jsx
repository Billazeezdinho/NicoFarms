import Header from "../components/navbar/Header"
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const Homeroute = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer />
    </>
  )
}

export default Homeroute;