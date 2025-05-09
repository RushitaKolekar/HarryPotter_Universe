import Header from "../UI/Header";
import Footer from "../UI/Footer"
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

 const AppLayout = () => {
  return (
   <>
   <ScrollToTop/>
   <Header/>
   <Outlet/>
   <Footer/>
   </>
  )
}
export default AppLayout;
