import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Slider from "../components/Slider"
import Category from "../components/Category"
import Product from "../components/Product"
import Contact from "../components/Contact"
import End from "../components/End"

const Home = ()=>{
    return(
        <>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Category/>
        <Product/>
        <Contact/>
        <End/>
        </>

    )
}

export default Home