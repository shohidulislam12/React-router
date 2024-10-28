import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";


const Home = () => {
  const navigation=useNavigation()
  const location=useLocation()
  console.log(location);
    return (
        <div>
        <Header ></Header>
        {
          navigation.state==='loading'?<p style={{background:'red',padding:"40px"}}>Loading...</p>:
            <Outlet></Outlet>
        }
      
          <Footer>    </Footer>
        </div>
    );
};

export default Home;