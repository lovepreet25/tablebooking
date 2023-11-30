import { Link } from "react-router-dom"
import Imghero from "../Assests/hero.png"
const Hero = () =>
{
    return(
    <div className="hero">
        <div className="hero-content">
            <div className="hero-desc">
                <p className="title"> Little Lemon</p>
                <p className= "subtitle"> Chicago</p>
                <p className="desc"> We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.</p>
                <Link to = "/reservation"><button className= "reserve-btn">
                    Reserve a Table
                    </button></Link>
            </div>
            <div className="img-wrapper">
                <img className="hero-png" src= {Imghero} alt ="main image"/>
            </div>
        </div>
    </div>
    )
}
export default Hero;