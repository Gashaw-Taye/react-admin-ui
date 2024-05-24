import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import PageNot from "./pages/PageNot";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Products from "./pages/products/Products"
import Users from "./pages/users/Users"
import "./styles/global.scss"
import {
  createBrowserRouter,
  RouterProvider,
Outlet
} from "react-router-dom";




function App() {

  const Layout=()=>{
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="ContentContainer">
          <Outlet/>
          </div>
        </div>
       <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      errorElement:<PageNot/>,
        children:[
          {
            path:"/",
            element:<Home/>,
            errorElement:<PageNot/>
          },
          {
            path:"/users",
            element:<Users/>,
            errorElement:<PageNot/>,
          },
          {
            path:"/products",
            element:<Products/>,
            errorElement:<PageNot/>,
          },
          {
            path:"/products",
            element:<Products/>,
            errorElement:<PageNot/>,
          },
          
        ]
     
    },
    {
      path:"/login",
      element:<Login />,
    },
    
  ]);
  
 

  return (
    <RouterProvider router={router} />
  )
}

export default App
