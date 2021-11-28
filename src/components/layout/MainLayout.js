import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout({children}){
    return(
        <container>
                <Navbar/>
                {children}
                <Footer/>
        </container>
    )
}

export default MainLayout;